var Person = require('./person');
var Statue = require('./statue');

class Medusa{
  constructor(name, statues) {
    this.name = name,
    this.statues = statues || []
  }
}

module.exports = Medusa;
