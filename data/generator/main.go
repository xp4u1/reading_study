package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func load_env() {
	err := godotenv.Load(".env.local")
	if err != nil {
		// Don't exit. The user can set the variable without the env file.
		// Writing to stderr does not break pipes:
		// $ ./import > output.csv
		// stdout -> output.csv
		// stderr -> (still) terminal
		fmt.Fprintf(os.Stderr, "Cannot load env file %v\n", err)
		fmt.Fprintln(os.Stderr, "Remember to set $DATABASE_URL.")
	}
}

func main() {
	log.SetFlags(0)
	load_env()
	download_data()
}
