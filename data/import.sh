#!/bin/sh

outputFile="export/data.csv"

# Copy env file for production database.
cp ../.env.production.local ./generator/.env.local

# Create output directory.
mkdir -p export

# Compile go code.
cd generator
go build

# Execute binary.
./generator > ../$outputFile

echo "Wrote data to $outputFile"
