import sys
import pyautogui
from pyjoystick.sdl2 import Key, run_event_loop

# Keymaps

right_joycon_map = {
    0: "up",
    1: "right",
    2: "left",
    3: "down",
}

left_joycon_map = {
    0: "down",
    1: "left",
    2: "right",
    3: "up",
}

both_joycon_map = {
    0: "right",
    1: "down",
    2: "up",
    3: "left",
    11: "up",
    12: "down",
    13: "left",
    14: "right"
}

# Current keymap, defaults to right joycon
keymap = {}

if "left" in sys.argv:
    print("Using keymap for the left joycon.")
    keymap = left_joycon_map
elif "both" in sys.argv:
    print("Using keymap for both joycons.")
    keymap = both_joycon_map
else:
    print("Using keymap for the right joycon.")
    keymap = right_joycon_map

def print_add(joy):
    print("Added controller", joy)

def print_remove(joy):
    print("Removed controller", joy)

def key_received(key):
    if key.keytype != Key.BUTTON or key.value != 1:
        return

    if key.number in keymap:
        pyautogui.press(keymap[key.number])

run_event_loop(print_add, print_remove, key_received)
