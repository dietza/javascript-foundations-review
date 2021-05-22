class Magician{
  constructor(magician) {
    this.name = `The Great ${magician.name}`,
    this.assistant = magician.assistant,
    this.clothing = magician.clothing ?? 'top hat',
    this.favoriteAccessory = this.clothing,
    this.confidencePercentage = 10
  }

  performIncantation(lowerIncantation) {
    let upperIncantation = `${lowerIncantation.toUpperCase()}!`
    return upperIncantation;
  }

  performTrick() {
    if (this.clothing === 'top hat') {
      this.confidencePercentage += 10
      return 'PULL RABBIT FROM TOP HAT'
    }
    if (this.clothing !== 'top hat') {
      this.confidencePercentage += 10
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if ((this.confidencePercentage >= 100) && (this.assistant)) {
      return 'WOW! The magician totally just sawed that person in half!';
    }
    if ((this.confidencePercentage < 100) || (!this.assistant)) {
      return 'Oh no, this trick is not ready!';
    }
  }

}

module.exports = Magician;
