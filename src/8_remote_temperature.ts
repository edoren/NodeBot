#!/usr/bin/env node

import * as dnode from "dnode"
import * as five from "johnny-five"

var board = new five.Board()

board.on("ready", function () {
    var thermometer = new five.Temperature({
        controller: "TMP36",
        pin: "A0"
    })

    var server = dnode({
        getTemperature : function (callback) {
            callback(thermometer.celsius)
        }
    });

    server.listen(1337);
});
