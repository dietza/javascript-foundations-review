class Vampire {
  constructor(name, pet = 'bat') {
    this.name = name,
    this.pet = pet,
    this.thirsty = true,
    this.ouncesDrank = 0
  }

  drink() {
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10
    } else if (this.ouncesDrank >= 50) {
      return 'I\'m too full to drink anymore!'
    }
    this.thirsty = false
  }

}

module.exports = Vampire;
