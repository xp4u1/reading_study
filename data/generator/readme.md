# Datenset erstellen

Dieses Programm verbindet sich mit der PostgreSQL Datenbank und erstellt eine csv Datei mit dem Datenset. Dabei werden die Tracking für die Lesezeit, -dauer etc. automatisch umgewandelt und hinzugefügt.

## Kompilieren des Go-Programms

```sh
go build
```

Im Verzeichnis sollte sich nun eine ausführbare Datei mit dem Namen `generator` befinden. Beachte jedoch, dass auf anderen Plattformen als Linux die Datei eine andere Dateiendung haben kann.

## Datenbankverbindung

Die Adresse der Datenbank wird in `.env.local` festgelegt. Kopiere die `.env` Datei und ändere den Connection-String.

Folgendes Format wird erwartet:

```env
DATABASE_URL=postgresql://user:password@host:port/database
```

## Ausführen des Programms

Beim Ausführen muss `DATABASE_URL` als Umgebungsvariable festgelegt sein. Am besten nutzt man dafür `.env.local`. Diese Datei muss jedoch im gleichen Verzeichnis sein, in dem man das Programm ausführt.

Beispiel:

```sh
./generator > ../export/data.csv
```
