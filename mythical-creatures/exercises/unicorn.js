class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    return this.color === 'white' ? true : false;
  }
  
  says(plainText) {
    let sparklyText = `${'**;*'} ${plainText} ${'*;**'}`
    return sparklyText;
  }

}

module.exports = Unicorn;
