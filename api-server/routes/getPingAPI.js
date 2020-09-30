let express = require('express');
let router = express.Router();
let ping = require('net-ping');

let data = [];
let counter = 0;

let config = require('../config/config.json');

setInterval(()=>{
    let target = config["ping_target"];
    let session = ping.createSession();

    session.pingHost (target, function (error, target, sent, rcvd) {
        if (error){
            let msg = {
                x: counter,
                Ping: 0
            };
            data.push(msg)
        }
        else {
            let ms = rcvd - sent;

            //reset when reach max data points for graph
            if (data.length >= config["max_data_points"]) {
                counter = 0;
                data = []
                let msg = {
                    x: counter,
                    Ping: ms
                };
                data.push(msg);
            } else {
                let msg = {
                    x: counter,
                    Ping: ms
                };
                data.push(msg);
            }
        }
        counter = counter + config["interval"] /1000;
    })
},config["interval"]);

router.get('/', function(req, res, next) {
    let target = config["ping_target"];
    let session = ping.createSession ();

    session.pingHost (target, function (error, target, sent, rcvd) {
        let ms = rcvd - sent;
        if (error){
            let msg = {
                target: target,
                status: "error",
                message: error.toString(),
                time: "timeout"
            };
            res.send(JSON.stringify((msg)))
        } else {
            let msg = {
                target: target,
                status: "Alive",
                message: "Target is alive. Time: " + ms + " ms",
                time: ms
            };
            res.send(JSON.stringify((msg)))
        }
    });
});

router.get('/pingPlotData', function(req, res, next){
    res.send(data)
})

module.exports = router;