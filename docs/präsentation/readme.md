# Präsentation

## joycon.py

Dieses Skript läuft im Hintergrund und wandelt die A, B, X und Y Tasten eines Joycons in Pfeiltasten um. So lässt sich ein Joycon perfekt als Präsentations-Fernbedienung verwenden.

```sh
# Virtuelle Umgebung erstellen
$ python3 -m venv venv

# Umgebung aktivieren
$ source venv/bin/activate

# Abhängigkeiten installieren
$ pip install pyautogui pyjoystick

# Skripts ausführen
$ python3 joycon.py
```

Es kann sein dass `SDL2` separat installiert werden muss.
