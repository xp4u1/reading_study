package main

import (
	"encoding/json"
	"log"
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
