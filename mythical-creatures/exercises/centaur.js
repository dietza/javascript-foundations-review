class Centaur{
  constructor(centaur) {
    this.name = centaur.name,
    this.breed = centaur.type,
    this.cranky = false,
    this.standing = true,
    this.layingDown = false,
    this.crankyCounter = 0
  }

  shootBow() {
    this.crankyCounter ++
    if ((this.crankyCounter < 3) && !this.layingDown) {
      return 'Twang!!!';
    } else if ((this.crankyCounter >= 3) || this.layingDown) {
      this.cranky = true
      return 'NO!';
    }
  }

  run() {
    this.crankyCounter ++
    if ((this.crankyCounter < 3) && !this.layingDown) {
      return 'Clop clop clop clop!!!';
    } else {
      this.cranky = true
      return 'NO!';
    }
  }

  sleep() {
    if (this.layingDown) {
      this.crankyCounter = 0
      this.cranky = false
      return 'ZZZZ';
    } else if (this.standing) {
      return 'NO!';
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }

  drinkPotion() {
    if (this.standing) {
      this.crankyCounter = 0
      this.cranky = false
      return 'Wow, that stuff makes me feel brand new!';
    } else if (!this.standing) {
      return 'Not while I\'m laying down!';
    }
  }

}

module.exports = Centaur;
