class Pirate{
  constructor(name, job = 'scallywag') {
    this.name = name,
    this.job = job,
    this.cursed = false,
    this.booty = 0,
    this.robberies = 0,
    this.summonedKraken = false;
  }

  robShip() {
    if (this.robberies < 5) {
      this.robberies ++
      this.booty += 100
      return 'YAARRR!';
    } else if (this.robberies >= 5) {
      this.robberies ++
      this.cursed = true
      return 'ARG! I\'ve been cursed!';
    }
  }

  liftCurse() {
    if (this.cursed) {
      this.booty -= 300
      this.cursed = false
      this.robberies = 0
      return 'Your curse has been lifted!';
    } else if (!this.cursed) {
      return 'You don\'t need to lift a curse!';
    }
  }
  
  summonKraken() {
    if ((this.job === 'captain') && !this.cursed) {
      this.summonedKraken = true

      for (let i = 0; i < 5; i ++) {
        this.robShip()
      }

      return 'UNLEASH THE KRAKEN!';
    } else if (this.job !== 'captain') {
      return 'You don\'t have that kind of power!'
    } else if (this.cursed) {
      return 'You must lift your curse first!'
    }
  }

}

module.exports = Pirate;
