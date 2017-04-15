#!/usr/bin/env node

import * as five from "johnny-five"

var board = new five.Board()

board.on("ready", function () {
    var servo = new five.Servo(9)
    var potentiometer = new five.Sensor("A2")

    potentiometer.on("change", function() {
        servo.to(five.Fn.map(this.value, 0, 1023, 0, 179))
    })
});
