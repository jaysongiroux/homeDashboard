let express = require('express');
let router = express.Router();
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

let download = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(download)
});

module.exports = router;
