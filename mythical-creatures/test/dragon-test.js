const assert = require('chai').assert;
const Dragon = require('../exercises/dragon');

describe('Dragon', () => {

  it('should be a function', () => {
    assert.isFunction(Dragon);
  });

  it('should instantiate our good friend, Dragon', () => {
    const smaug = new Dragon();
    
    assert.instanceOf(smaug, Dragon);
  });
  
  it('should have a name', () => {
    const dragon1 = new Dragon('Jeff');
    const dragon2 = new Dragon('Louisa');

    assert.equal(dragon1.name, 'Jeff');
    assert.equal(dragon2.name, 'Louisa');
  });
  
  it('should have a rider', () => {
    const dragon = new Dragon('Saphira', 'Eragon');

    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
  });

  it('should greet their rider', () => {
    const dragon1 = new Dragon('Gray', 'Marley');
    const dragon2 = new Dragon('Sky', 'Susie');

    const greeting1 = dragon1.greet();
    const greeting2 = dragon2.greet();

    assert.equal(greeting1, 'Hi, Marley!');
    assert.equal(greeting2, 'Hi, Susie!');
  });

  it('should start off being hungry', () => {
    const dragon = new Dragon('Josh');

    assert.equal(dragon.hungry, true);
  });

  it('should be full after eating 3 times', () => {
    const dragon = new Dragon('Lady Vox');

    dragon.eat();

    assert.equal(dragon.hungry, true);

    dragon.eat();

    assert.equal(dragon.hungry, true);

    dragon.eat();

    assert.equal(dragon.hungry, false);
  });
});
