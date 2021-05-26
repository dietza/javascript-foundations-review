const Person = require('./person');
const Statue = require('./statue');

class Medusa{
  constructor(name, statues) {
    this.name = name,
    this.statues = statues || []
  }

  gazeAtVictim(victim) {
    let stoned = new Statue(victim.name)
    if (this.statues.length < 3) {
      this.statues.push(stoned)
      return stoned;
    } else if (this.statues.length >= 3) {
      let freeVictim = this.statues.shift()
      let restoredToPerson = new Person(freeVictim.name, 'relieved')
      this.statues.push(stoned)
      return restoredToPerson;
    }
  }

}

module.exports = Medusa;
