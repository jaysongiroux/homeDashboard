let express = require('express');
let router = express.Router();
let ping = require('net-ping');

let data = [];
let counter = 0;
let maxDataPoints = 1000;

let setIntervalTimeout = 5000;

setInterval(()=>{
    let target = '8.8.8.8';
    let session = ping.createSession();

    session.pingHost (target, function (error, target, sent, rcvd) {
        let ms = rcvd - sent;
        if(data.length >= maxDataPoints) {
            counter = 0;
            data = []
            let msg = {
                x: counter,
                Ping: ms
            };
            data.push(msg);
        }
        else {
            let msg = {
                x:counter,
                Ping:ms
            };
            data.push(msg);
        }
        counter = counter + setIntervalTimeout /1000;
    })
},5000)


router.get('/', function(req, res, next) {
    let target = '8.8.8.8';
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