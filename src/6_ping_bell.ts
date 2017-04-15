#!/usr/bin/env node

import * as dgram from "dgram"
import * as five from "johnny-five"

var board = new five.Board()

board.on("ready", function () {
    var piezo = new five.Piezo(8)

    var server = dgram.createSocket("udp4")
    server.bind(1337)

    server.on("message", function() {
        piezo.play("C4");
    })
});
