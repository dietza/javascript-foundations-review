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
    console.log('CRANKY COUNTER >>>> ', this.crankyCounter)
    if (this.crankyCounter < 3) {
      return 'Twang!!!';
    } else if (this.crankyCounter >= 3) {
      this.cranky = true
      return 'NO!';
    }
  }

  run() {
    this.crankyCounter ++
    console.log('CRANKY COUNTER >>>> ', this.crankyCounter)
    if (this.crankyCounter < 3) {
      return 'Clop clop clop clop!!!';
    } else if (this.crankyCounter >= 3) {
      this.cranky = true
      return 'NO!';
    }
  }

  sleep() {
    if (this.standing) {
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

}

module.exports = Centaur;
