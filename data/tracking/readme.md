# Tracking-Daten in CSV umwandeln

Dieses Go-Programm ermöglicht es, Tracking-Daten aus der Supabase-Datenbank (Tabelle "tracking") in ein CSV-Format zu konvertieren.

## Anwendung

Folge diesen Schritten, um das Programm auszuführen:

### Kompilieren des Go-Programms

```sh
go build
```

Im Verzeichnis sollte sich nun eine ausführbare Datei mit dem Namen `tracking` befinden. Beachte jedoch, dass auf anderen Plattformen als Linux die Datei eine unterschiedliche Dateiendung haben kann.

### Herunterladen der Tabelle

Lade aus dem Supabase Dashboard die Tabelle "tracking" als CSV Datei herunter.

### Ausführen des Go-Programms

Nach dem Kompilieren des Programms kannst du es mit dem folgenden Befehl ausführen:

```sh
./tracking input.csv > output.csv
```

Ersetze dabei `input.csv` mit dem Pfad zu der heruntergeladenen Datei.

## Erwartetes Dateiformat

Das Programm erwartet CSV-Dateien mit folgendem Aufbau:

```csv
id,created_at,user_id,data
int,timestamp,uuid,"json string"
```
