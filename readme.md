# Seminarfachprojekt Psychologie

![](docs/images/promo.png)

## Was ist das für eine Studie?

Für mein Seminarfachprojekt habe ich eine (kleine) empirische Studie mit Schülern durchgeführt, ob ihnen Bionic Reading beim Lesen helfen kann.
In dieser Studie wird die kontroverse Lesetechnik des sogenannten "Bionic Reading" untersucht. Bionic Reading verspricht, die Lesegeschwindigkeit zu steigern und das Textverständnis zu verbessern.

Mehr zum Hintergrund, der Herangehensweise und den Ergbnissen findest du in [`/docs`](./docs).

Für die Studie habe ich diese Plattform programmiert. Der Vorteil gegenüber Google Docs oder ähnlichen Anbietern ist, dass man nicht nur Fragebögen erstellen kann, sondern auch das Verhalten der Teilnehmer analysieren kann. Im Hintergrund werden die Seitenaufrufe getrackt, damit für die Auswertung beispielsweise die Lesedauer berechnet werden kann.

## Quickstart

```sh
# Repository klonen
$ git clone git@github.com:xp4u1/reading_study

# Pakete herunterladen
$ yarn

# Datenbank lokal starten
$ supabase start

# Tabellen in der Datenbank erstellen
$ supabase db reset

# App im Entwicklungsmodus starten
$ yarn dev
```

## Datenbank

Der Server stellt eine Verbindung zu einer PostgreSQL Datenbank her, um Daten zu speichern.

Mithilfe [`.env`](./.env) werden die Anmeldedaten als Umgebungsvariable gespeichert. Wenn du nicht die Standardwerte für eine lokale Supabase-Umgebung nutzt, speichere deine Änderungen nicht in `.env`, sondern in `.env.local`. Diese überschreibt `.env` und kann nicht aus Versehen hochgeladen und veröffentlicht werden. Man kann auch Konfigurationsdateien für verschiedene `NODE_ENV` definieren, beispielsweise `.env.production.local`.

## Auswertung

Für die Auswertung der gesammelten Daten habe ich ein [Jupyter Notebook](./data/notebooks/auswertung.ipynb) erstellt.

Im Verzeichnis [`/data`](./data) befindet sich auch eine Docker Compose Konfiguration, mit der man schnell einen Notebook-Server aufsetzen kann.

```sh
# In das Verzeichnis navigieren
$ cd data

# Automatischer Datenimport
$ mkdir export
$ chmod +x import.sh
$ ./import.sh

# Jupyter Notebook starten
$ docker compose up
```

Das Skript für den automatischen Datenimport setzt voraus, dass eine gültige `.env.production.local` Datei existiert. Zusätzlich muss man einen [Go Compiler](https://go.dev/doc/install) installiert haben. Weitere Informationen dazu findest du in [`/data/generator`](./data/generator).

---

<small>Bionic Reading® ist eine eingetragene Marke der Bionic Reading AG. Die Verwendung des Begriffs in diesem Repository dient ausschließlich zu Forschungszwecken und impliziert weder eine Befürwortung noch eine ablehnende Haltung gegenüber der Marke. Alle Rechte an der Marke liegen beim jeweiligen Inhaber.</small>
