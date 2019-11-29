'use strict';
let fs = require('fs');

class View {
  static render(response, path, data) {
    console.log("Path: " + path);
    fs.readFile('views/' + path, { encoding: 'utf8' }, function(error, view) {
      if (!error) {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.write(view);
        response.end();
      }
    });
  }

  static show(response, path, data) {
    console.log("Path: " + path);
    console.log("Data: " + data.id);
    fs.readFile("img/" + path + "/" + data.id + ".jpg", { encoding: 'binary' }, function(error, file) {
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
  }
}

module.exports = View;
