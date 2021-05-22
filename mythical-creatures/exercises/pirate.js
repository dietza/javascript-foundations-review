class Pirate{
  constructor(name, job = 'scallywag') {
    this.name = name,
    this.job = job,
    this.cursed = false,
    this.booty = 0,
    this.robberies = 0
  }


  // outer function state: how many times / if it's been called
  // 

  robShip() {
      if (this.robberies < 5) {
console.log('COUNTER >>>>> ', this.robberies)
        this.robberies ++
        this.booty += 100
console.log('SUCCESSFUL ROBBERY! >>>>> ', this.robberies)
            return 'YAARRR!';
      } else if (this.robberies >= 5) {
console.log('COUNTER >>>>> ', this.robberies)
        this.robberies ++
        this.cursed = true
console.log('CURSED! >>>>> ', this.robberies)
        return 'ARG! I\'ve been cursed!';
      }
  }

  liftCurse() {
    if (this.cursed) {
      this.booty -= 300
      this.cursed = false
      return 'Your curse has been lifted!';
    } else if (!this.cursed) {
      return 'You don\'t need to lift a curse!';
    }
  }
  
}

module.exports = Pirate;
