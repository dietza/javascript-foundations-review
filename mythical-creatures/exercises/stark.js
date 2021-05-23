const Direwolf = require('./direwolf');

class Stark{
  constructor(stark) {
    this.name = stark.name,
    this.location = stark.area ?? 'Winterfell',
    this.safe = false
  }

  sayHouseWords() {
    switch(this.safe) {
      case false: 
        return 'Winter is Coming';
      case true:
        return 'The North Remembers';
    }
  }

  callDirewolf(name, home) {
    let direwolf = new Direwolf(name, this.location)
    direwolf.protect(this)
    return direwolf;
  }

}

module.exports = Stark;
