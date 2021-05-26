class Hobbit{
  constructor(hobbit) {
    this.name = hobbit.name,
    this.age = hobbit.age || 0,
    this.adult = false,
    this.old = false,
    this.hasRing = false
  }

  celebrateBirthday() {
    this.age ++
    if (this.age >= 33) {
      this.adult = true
      if (this.age >= 101) {
        this.old = true
      }
    } 
  }

  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true
      return 'Here is the ring!';
    } else {
      return 'You can\'t have it!';
    }
  }

}

module.exports = Hobbit;
