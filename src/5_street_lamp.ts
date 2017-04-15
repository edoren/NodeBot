#!/usr/bin/env node

import * as five from "johnny-five"

var board = new five.Board()

board.on("ready", function () {
    var led = new five.Led(9)
    var photo = new five.Sensor("A0")

    photo.on("change", function() {
        if (this.value > 600) {
            led.on();
        } else {
            led.off();
        }
    });
});
