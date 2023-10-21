package main

import (
	"database/sql"
	"encoding/csv"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"

	_ "github.com/lib/pq"
)

func print_csv(data [][]string) {
	writer := csv.NewWriter(os.Stdout)
	defer writer.Flush()

	for _, row := range data {
		err := writer.Write(row)
		if err != nil {
			log.Fatalf("Cannot write to stdout: %v", err)
		}
	}
}

// Joins all the tables and returns the data as csv slice.
func query_database() [][]string {
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatalf("Cannot establish database connection: %v", err)
	}
	defer db.Close()

	query := `
		SELECT
			users.id::text,
			users.fingerprint,
			users.test,
			questions_lehrerin.gefuehle_beruf as fragen_gefuehle_beruf,
			questions_lehrerin.warum_lehrer as fragen_warum_lehrer,
			questions_lehrerin.oeffentlichkeit_meinung as fragen_oeffentlichkeit_meinung,
			questions_lehrerin.vorwurf_eltern as fragen_vorwurf_eltern,
			questions_lehrerin.internet as fragen_internet,
			evaluation_bionic.schneller as bionic_schneller,
			evaluation_bionic.leichter as bionic_leichter,
			evaluation_bionic.textverstaendnis as bionic_textverstaendnis,
			evaluation_bionic.woerter_finden as bionic_woerter_finden,
			evaluation_bionic.mehr_texte as bionic_mehr_texte,
			evaluation_bionic.in_schule as bionic_in_schule,
			evaluation_bionic.anmerkungen as bionic_anmerkungen,
			evaluation_personal.freude_lesen as persoenlich_freude_lesen,
			evaluation_personal.haeufigkeit_lesen as persoenlich_haeufigkeit_lesen,
			evaluation_personal.ziel_lesen as persoenlich_ziel_lesen,
			evaluation_personal.textverstaendnis as persoenlich_textverstaendnis,
			evaluation_personal.alter as persoenlich_alter,
			tracking.data as tracking_json
		FROM
			users
			FULL JOIN evaluation_bionic ON users.id = evaluation_bionic.user_id
			FULL JOIN evaluation_personal ON users.id = evaluation_personal.user_id
			FULL JOIN questions_lehrerin ON users.id = questions_lehrerin.user_id
			FULL JOIN tracking ON users.id = tracking.user_id
	`

	rows, err := db.Query(query)
	if err != nil {
		log.Fatalf("Cannot execute query: %v", err)
	}
	defer rows.Close()

	columns, err := rows.Columns()
	if err != nil {
		log.Fatalf("Cannot read columns: %v", err)
	}

	result := [][]string{}

	// Create csv header.
	result = append(result, columns)

	// Evil pointer usage:
	// valuesPtr := [*strPtr1, *strPtr2, ...]
	//    values := [str1, str2, ...]
	valuesPtr := make([]interface{}, len(columns))
	values := make([]sql.NullString, len(columns))

	for i := range columns {
		valuesPtr[i] = &values[i]
	}

	for rows.Next() {
		if err := rows.Scan(valuesPtr...); err != nil {
			log.Fatalf("Cannot scan row: %v", err)
		}

		// Rows can contain null, but we cannot convert null entries
		// directly to strings. That's why we use sql.NullString first.
		stringValues := make([]string, len(values))
		for i, nullString := range values {
			if nullString.Valid {
				value := nullString.String
				value = strings.ReplaceAll(value, "\r\n", "")
				value = strings.ReplaceAll(value, "\n", "")

				stringValues[i] = value
			} else {
				stringValues[i] = ""
			}
		}

		result = append(result, stringValues)
	}

	return result
}

func download_data() {
	data := query_database()

	for i, row := range data {
		// Remove last element (json data).
		newRow := row[:len(row)-1]

		json, err := strconv.Unquote(row[len(row)-1])
		if err != nil && i != 0 {
			// Missing tracking data?
			if json == "" {
				newRow = append(newRow, "")
				newRow = append(newRow, "")
				newRow = append(newRow, "")
				data[i] = newRow

				continue
			} else {
				log.Fatalf("Cannot unquote json: %v", err)
			}
		}

		// Header?
		if i == 0 {
			newRow = append(newRow, "readingCount")
			newRow = append(newRow, "readingDuration")
			newRow = append(newRow, "questionsDuration")
		} else {
			// Parse json data.
			trackingData := readTrackingData([]byte(json))
			readingCount, readingDuration := pathStats(trackingData, "/lehrerin/reading")
			_, questionsDuration := pathStats(trackingData, "/lehrerin/questions")

			newRow = append(newRow, fmt.Sprint(readingCount))
			newRow = append(newRow, fmt.Sprint(readingDuration))
			newRow = append(newRow, fmt.Sprint(questionsDuration))
		}

		data[i] = newRow
	}

	print_csv(data)
}
