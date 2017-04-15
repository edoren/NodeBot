#!/usr/bin/env node

import * as five from "johnny-five";

var board = new five.Board();

board.on("ready", function () {
    var btn = new five.Button(5);
    var led = new five.Led(9);

    btn.on("press", function() {
        led.toggle();
    })
});
