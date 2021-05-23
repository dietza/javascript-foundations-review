class Werewolf{
  constructor(name, form = 'human') {
    this.name = name,
    this.form = form,
    this.hungry = false
  }

  completeTransformation() {
    let currentForm = this.form
    switch(currentForm) {
      case 'human':
        this.form = 'wolf'
        this.hungry = true
        return 'Aaa-Woooo!';
      case 'wolf':
        this.form = 'human'
        this.hungry = false
        return 'Where are I?';
    }
  }

  eatVictim(victim) {
    let currentForm = this.form
    switch(currentForm) {
      case 'wolf':
        victim.alive = false
        this.completeTransformation()
        return `Yum, ${victim.name} was delicious.`;
      case 'human':
        return `No way am I eating ${victim.name}, I'd like a burger!`;
    }
  }

}

module.exports = Werewolf;
