var Medusa = require('./medusa');
var Statue = require('./statue');

class Person{
  constructor(name, mood) {
    this.name = name,
    this.mood = mood || 'frightened'
  }
  
}

module.exports = Person;
