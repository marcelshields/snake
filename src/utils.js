"use strict";

export function getArrowDirection(keycode) {
    switch(keycode) {
        case "ArrowRight":
            return "Right";
        case "ArrowLeft":
            return "Left";
        case "ArrowUp":
            return "Up";
        case "ArrowDown":
            return "Down";
    }
}