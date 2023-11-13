import pyautogui
from pyjoystick.sdl2 import Key, run_event_loop

def print_add(joy):
    print("Added controller", joy)

def print_remove(joy):
    print("Removed controller", joy)

def key_received(key):
    if key.keytype != Key.BUTTON or key.value != 1:
        return
    
    if key.number == 0:
        pyautogui.press("up")

    if key.number == 1:
        pyautogui.press("right")

    if key.number == 2:
        pyautogui.press("left")

    if key.number == 3:
        pyautogui.press("down")

run_event_loop(print_add, print_remove, key_received)
