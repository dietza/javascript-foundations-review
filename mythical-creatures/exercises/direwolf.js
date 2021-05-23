class Direwolf{
  constructor(name, home, size) {
    this.name = name,
    this.home = home ?? 'Beyond the Wall',
    this.size = size ?? 'Massive',
    this.starksToProtect = [],
    this.huntsWhiteWalkers = true
  }

  protect(stark) {
    let protectionLimit = this.starksToProtect.length < 2 ? false : true;
    if ((this.home === stark.location) && !protectionLimit) {
      stark.safe = true
      this.huntsWhiteWalkers = false
      this.starksToProtect.push(stark)
    }
  }

  leave(stark) {
    stark.safe = false
    this.starksToProtect = this.starksToProtect.filter(protectedStark => {
      return protectedStark.name !== stark.name;
    })
  }

}

module.exports = Direwolf;
