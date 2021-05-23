class Fairy{
  constructor(name) {
    this.name = name,
    this.dust = 10,
    this.clothes = {dresses: ['Iris']},
    this.disposition = 'Good natured',
    this.humanWards = []
  }

  receiveBelief() {
    this.dust ++
  }

  believe() {
    this.dust += 10
  }

  makeDresses(flowers) {
    let currentDresses = this.clothes.dresses
    this.clothes.dresses = currentDresses.concat(flowers)
  }

  becomeProvoked() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant)
      infant.disposition = 'Malicious'
    } else {
      return infant;
    }
    if (this.humanWards.length >= 2) {
      this.disposition = 'Good natured'
    }
  }

}

module.exports = Fairy;
