const Person = require('./person');
const Statue = require('./statue');

class Medusa{
  constructor(name, statues) {
    this.name = name,
    this.statues = statues || []
  }

  gazeAtVictim(victim) {
    if (this.statues.length < 3) {
      let stoned = new Statue(victim.name)
      this.statues.push(stoned)
      return stoned;
    } else if (this.statues.length >= 3) {
      let freeVictim = this.statues.shift()
      let restoredToPerson = new Person(freeVictim.name, 'relieved')
      let stoned = new Statue(victim.name)
      this.statues.push(stoned)
      return restoredToPerson;
    }
  }

}

module.exports = Medusa;
