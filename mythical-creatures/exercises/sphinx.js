class Sphinx{
  constructor() {
    this.name = null,
    this.riddles = [],
    this.heroesEaten = 0
  }

  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle)
    } else if (this.riddles.length >= 3) {
      this.riddles.splice(0, 1)
      this.riddles.push(riddle)
    }
  }

  attemptAnswer(guess) {
    const checkGuess = this.riddles.some(riddle => riddle.answer === guess)

    if (checkGuess) {
      const remaining = this.riddles.filter(riddle => riddle.answer !== guess)
      this.riddles = remaining

      if (remaining.length > 0) {
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      } else if (remaining.length === 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${guess}\"???`;
      }

    } else if (!checkGuess) {
      this.heroesEaten ++
    }
  }

}

module.exports = Sphinx;
