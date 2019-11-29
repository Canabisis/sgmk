'use strict';

let View = require('../view');

class Main {
  static index(response, data) {
    View.render(response, 'index.html');
  }

  static planet(response, data) {
    View.render(response, 'planet.html');
  }

  static getPeople(response, data) {
    console.log(data); // { id: ___ }
    View.show(response, 'people', data);
  }

  static getPlanet(response, data) {
    console.log(data); // { id: ___ }
    View.show(response, 'planet', data);
  }
}

module.exports = Main;
