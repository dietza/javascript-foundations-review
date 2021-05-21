class Pirate{
  constructor(name, job = 'scallywag') {
    this.name = name,
    this.job = job,
    this.cursed = false,
    this.booty = 0,
  }

  robShip() {
    counter += 1

    console.log('COUNTER >>>>> ', counter)

    if (counter < 5) {
      this.booty += 100
      return 'YAARRR!';
    } else if (counter >= 5) {
      this.cursed = true
      return 'ARG! I\'ve been cursed!';
    }
  }

}

module.exports = Pirate;
