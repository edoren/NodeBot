#!/usr/bin/env node

import * as five from "johnny-five"

var board = new five.Board()

board.on("ready", function () {
    var thermometer = new five.Temperature({ controller: "TMP36", pin: "A0" })
    var piezo = new five.Piezo(9)
    var led = new five.Led(13)
    var button = new five.Button(5)

    var button_pressed = false;

    button.on("press", function () {
        piezo.off()
        led.off()
        button_pressed = true;
    })

    thermometer.on("change", function () {
        if (this.celsius > 50) {
            if (!button_pressed) {
                piezo.play("C4")
                led.toggle()
            }
        } else {
            piezo.off()
            led.off()
            button_pressed = false;
        }
    })
})

