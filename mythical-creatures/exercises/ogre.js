const Human = require('./human');

class Ogre{
  constructor(ogre) {
   this.name = ogre.name,
   this.home = ogre.abode ?? 'Swamp',
   this.swings = 0
  }

  encounter(human) {
    human.encounterCounter ++
    if (human.noticesOgre()) {
      this.swingAt(human)
    }
  }

  swingAt(human) {
    this.swings ++
    if ((this.swings % 2 === 0) && this.swings > 0) {
      human.knockedOut = true
    }
  }

  apologize(human) {
    this.swings = 0
    human.encounterCounter = 0
    human.knockedOut = false
  }

}

module.exports = Ogre;
