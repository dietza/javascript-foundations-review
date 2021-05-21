
class Dragon {
  constructor(name, rider) {
    this.name = name,
    this.rider = rider,
    this.hungry = true,
    this.timesFed = 0
  }

  greet() {
    return 'Hi, ' + this.rider + '!'
  }

  eat() {
    this.timesFed ++
    if (this.timesFed >=3) {
      this.hungry = false
    }
  }

}

module.exports = Dragon;
