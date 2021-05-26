class Vampire {
  constructor(name, pet = 'bat') {
    this.name = name,
    this.pet = pet,
    this.thirsty = true,
    this.ouncesDrank = 0
  }

  drink() {
    this.thirsty = false
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10
    } else if (this.ouncesDrank >= 50) {
      return 'I\'m too full to drink anymore!'
    }
  }

  askToComeIn() {
    return 'May I enter your home, juicy human?';
  }

  tryToEnter(isRejected) {
    if (isRejected) {
      return 'Hsssss! I will have my revenge for this disrespect!'
    } else if (!isRejected) {
      for (let i = 0;  i < 3; i++) {
        this.drink()
      }
      return 'Aha! I have been so thirsty, and now you are mine!'
    }
  }

}

module.exports = Vampire;
