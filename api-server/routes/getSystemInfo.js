let express = require('express');
let router = express.Router();
let si = require('systeminformation');

let cpuPlotData =[];
let counter = 0;

let config = require('../config/config.json');

// https://github.com/sebhildebrandt/systeminformation

setInterval(()=>{
    si.currentLoad()
        .then(data => {
            if (cpuPlotData.length >= config["max_data_points"]){
                counter = 0;
                cpuPlotData = [];
                let msg = {
                    x:counter,
                    currentload: data["currentload"]
                }
                cpuPlotData.push(msg);
            } else {
                let msg = {
                    x: counter,
                    currentload: data["currentload"]
                }
                cpuPlotData.push(msg)
            }
            counter = counter + config["interval"] /1000
        })
},config["interval"])


router.get('/cpu', function(req, res, next) {
    si.cpu()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

router.get('/cpuTemp', function(req, res, next) {
    si.cpuTemperature()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error => {
            res.send(JSON.stringify(error))
        })
});

router.get('/cpuCurrentSpeed', function(req, res, next) {
    si.cpuCurrentspeed()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error => {
            res.send(JSON.stringify(error))
        })
});

router.get('/currentLoad', function(req, res, next) {
    si.currentLoad()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error => {
            res.send(JSON.stringify(error))
        })
});

router.get('/currentLoadPlot', function(req, res, next) {
    res.send(cpuPlotData)
});

router.get('/processes', function(req, res, next) {
    si.processes()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error => {
            res.send(JSON.stringify(error))
        })
});

// SYSTEM
router.get('/system', function(req, res, next){
    si.system()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

//NETWORK
router.get('/networkInterfaces', function(req, res, next){
    si.networkInterfaces()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

router.get('/networkGatewayDefault', function(req, res, next){
    si.networkGatewayDefault()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

router.get('/networkStats', function(req, res, next){
    si.networkStats()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

router.get('/networkInterfaceDefault', function(req, res, next){
    si.networkInterfaceDefault()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

router.get('/wifiNetworks', function(req, res, next){
    si.wifiNetworks()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

router.get('/getDynamicData', function(req, res, next){
    si.getDynamicData()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

router.get('/mem', function(req, res, next){
    si.mem()
        .then(data => {
            res.send(JSON.stringify(data))
        })
        .catch(error =>{
            res.send(JSON.stringify(error))
        })
});

module.exports = router;