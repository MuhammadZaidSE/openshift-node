const http = require('http');

// let port = process.env.PORT || 3000;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var origin, key, url;

http.createServer(function(req, res) {
    // origin = req.headers['origin'];
    // if (origin === 'http://www.beatsloop.com' || origin === 'http://beatsloop.com') {
        // key = API_KEYS[getRandomInt(0, API_KEYS.length - 1)];
        // url = BASE_URL + req.url + "&key=" + key;
        // req.pipe(request(url)).pipe(res);
    // }
    // else {
        console.log('headers------------------->:', JSON.stringify(req.headers));
        res.end("Hahahahaha");
    // }
}).listen(port, server_ip_address);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Server Started at port: "+ port);