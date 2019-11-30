const express = require('express');
let fs = require('fs');
let app = express();

app.get('/', function (req, res) {
   res.send('Hello API');
});

app.get('/peoples/:id', function (req, res) {
    const response = res;
    const path = req.url;
    fs.readFile("img" + path + ".jpg", { encoding: 'binary' }, function(error, file) {
        if(error) {
          response.writeHead(500, {"Content-Type": "text/plain; charset=utf-8"});
          response.write(error + "\n");
          response.end();
        } else {
          response.writeHead(200, {"Content-Type": "image/png"});
          response.write(file, "binary");
          response.end();
        }
    });
});
app.get('/planets/:id', function (req, res) {
    const response = res;
    const path = req.url;
    fs.readFile("img" + path + ".jpg", { encoding: 'binary' }, function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain; charset=utf-8"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
});
app.get('/starships/:id', function (req, res) {
    const response = res;
    const path = req.url;
    fs.readFile("img" + path + ".jpg", { encoding: 'binary' }, function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain; charset=utf-8"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
});

app.listen(3000, function () {
    console.log('Server started');
});