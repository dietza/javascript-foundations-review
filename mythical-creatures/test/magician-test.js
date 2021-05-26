const assert = require('chai').assert;
const Magician = require('../exercises/magician');

describe('Magician', () => {

  it('should be a function that instantiates a class', () => {
    assert.isFunction(Magician);
    assert.instanceOf(new Magician({}), Magician);
  });

  it('should have a stage name', () => {
    const magician1 = new Magician({ name: 'Scott' });
    const magician2 = new Magician({ name: 'Casey' });

    assert.equal(magician1.name, 'The Great Scott');
    assert.equal(magician2.name, 'The Great Casey');
  });

  it('should be able to have an assistant', () => {
    const magician1 = new Magician({ name: 'Scott', assistant: true });
    const magician2 = new Magician({ name: 'Casey', assistant: false });

    assert.equal(magician1.name, 'The Great Scott');
    assert.equal(magician1.assistant, true);

    assert.equal(magician2.name, 'The Great Casey');
    assert.equal(magician2.assistant, false);
  });

  it('should prefer wearing a top hat', () => {
    const magician = new Magician({ name: 'Scott' });

    assert.equal(magician.favoriteAccessory, 'top hat');
  });

  it('should be able to have a different favorite accessory', () => {
    const magician = new Magician({ name: 'Casey', clothing: 'cape' });

    assert.equal(magician.favoriteAccessory, 'cape')
  });

  it('should be able to perform an incantation', () => {
    const magician = new Magician({ name: 'Scott' });
    
    const spell = magician.performIncantation('abracadabra');
    const charm = magician.performIncantation('allakazaam')
    
    assert.equal(spell, 'ABRACADABRA!');
    assert.equal(charm, 'ALLAKAZAAM!');
  });
  
  it('should be able to pull a rabbit from the hat, if the magician has a top hat', () => {
    const magician1 = new Magician({ name: 'Hannah' });
    const magician2 = new Magician({ name: 'Kayla', clothing: 'top hat' });
    
    const spell1 = magician1.performTrick();
    const spell2 = magician2.performTrick();
    
    assert.equal(spell1, 'PULL RABBIT FROM TOP HAT');
    assert.equal(spell2, 'PULL RABBIT FROM TOP HAT');
  });
  
  it('should be able to pull a dove from the sleeve, if the magician does not have a top hat', () => {
    const magician = new Magician({ name: 'Leta', clothing: 'cape' });
    
    const spell = magician.performTrick();
    
    assert.equal(spell, 'PULL DOVE FROM SLEEVE');
  });
  
  it('should start not very confident', () => {
    const magician = new Magician({ name: 'Leta' });
    
    assert.equal(magician.confidencePercentage, 10);
  });
  
  it('should gain confidence after performing spells', () => {
    const magician = new Magician({ name: 'Leta' });

    magician.performTrick();
    magician.performTrick();
    magician.performTrick();

    assert.equal(magician.confidencePercentage, 40);

    magician.performTrick();

    assert.equal(magician.confidencePercentage, 50);
  });

  it('should not be able to saw someone in half unless they\'re 100% confident', () => {
    const magician = new Magician({ name: 'Scott', assistant: true });

    assert.equal(magician.performShowStopper(), 'Oh no, this trick is not ready!');

    for (let i = 0; i < 10; i++) {
      magician.performTrick();
    }

    assert.equal(magician.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });

  it('should not be able to saw someone in half unless they have an assistant', () => {
    const magician1 = new Magician({ name: 'Scott', assistant: false });
    const magician2 = new Magician({ name: 'Hannah', assistant: true });

    assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
    assert.equal(magician2.performShowStopper(), 'Oh no, this trick is not ready!');

    for (let i = 0; i < 10; i++) {
      magician1.performTrick();
      magician2.performTrick();
    }

    assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
    assert.equal(magician2.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });
});
