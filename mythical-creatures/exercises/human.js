class Human{
  constructor(name) {
    this.name = name,
    this.encounterCounter = 0,
    this.knockedOut = false
  }

  noticesOgre() {
    let currentCount = this.encounterCounter
    if ((currentCount % 3 === 0) && currentCount > 0) {
      return true;
    } else if (currentCount <= 0) {
      return false;
    } else if (!currentCount % 3 === 0) {
      return false;
    }
  }

}

module.exports = Human;
