class Sphinx{
  constructor() {
    this.name = null,
    this.riddles = []
  }

  collectRiddle(riddle) {
    console.log('RIDDLES before collect >>> ', this.riddles)
    if (this.riddles.length < 3) {
      this.riddles.push(riddle)
    } else if (this.riddles.length >= 3) {
      this.riddles.splice(0, 1)
      this.riddles.push(riddle)
    }
    console.log('RIDDLES after collect >>> ', this.riddles)
  }

  attemptAnswer(guess) {
    console.log('GUESS', guess)

    const checkGuess = this.riddles.some(riddle => riddle.answer === guess)
    console.log('CHECK GUESS', checkGuess)

    if (checkGuess) {
      const remaining = this.riddles.filter(riddle => riddle.answer !== guess)
      this.riddles = remaining
    } else if (!checkGuess) {

    }

  }

}

module.exports = Sphinx;
