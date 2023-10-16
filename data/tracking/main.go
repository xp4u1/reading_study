package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"log"
	"os"
)

type TrackingData []TrackingDataEntry

type TrackingDataEntry struct {
	Path      string `json:"path"`
	Timestamp int64  `json:"timestamp"`
}

// Converts byte data to TrackingData.
func readTrackingData(data []byte) TrackingData {
	var trackingData TrackingData
	err := json.Unmarshal(data, &trackingData)
	if err != nil {
		log.Fatalf("Cannot decode json data: %v", err)
	}

	return trackingData
}

// Returns number of visits and length of stay in milliseconds.
// Cannot calculate duration of the last entry in the dataset.
//
// (count, duration) := pathStats(...)
func pathStats(trackingData TrackingData, path string) (int, int64) {
	count := 0
	var duration int64 = 0

	length := len(trackingData)
	for i, entry := range trackingData {
		// Ignore last entry (second timestamp to calculate duration is missing).
		if i == length-1 {
			continue
		}

		if entry.Path != path {
			continue
		}

		duration += (trackingData[i+1].Timestamp - entry.Timestamp)
		count += 1
	}

	return count, duration
}

func main() {
	log.SetFlags(0)

	args := os.Args
	if len(args) != 2 {
		log.Fatalf("Syntax: %v input.csv", args[0])
	}

	csvFile, err := os.Open(args[1])
	if err != nil {
		log.Fatalf("Cannot open file: %v", err)
	}

	defer csvFile.Close()

	reader := csv.NewReader(csvFile)
	reader.LazyQuotes = true

	// Data must fit in RAM.
	csvData, err := reader.ReadAll()
	if err != nil {
		log.Fatalf("Cannot read file: %v", err)
	}

	fmt.Println("user_id,reading_count,reading_duration,questions_duration")
	for i, line := range csvData {
		// Skip CSV Header.
		if i == 0 {
			continue
		}

		trackingData := readTrackingData([]byte(line[3]))
		readingCount, readingDuration := pathStats(trackingData, "/lehrerin/reading")
		_, questionsDuration := pathStats(trackingData, "/lehrerin/questions")

		fmt.Printf("%v,%d,%d,%d\n", line[2], readingCount, readingDuration, questionsDuration)
	}
}
