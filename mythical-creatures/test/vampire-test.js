const assert = require('chai').assert;
const Vampire = require('../exercises/vampire');

describe('Vampire', () => {

  it('should be a function', () => {
    assert.isFunction(Vampire);
  });

  it('should instantiate our good friend, Vampire', () => {
    const dracula = new Vampire();

    assert.instanceOf(dracula, Vampire);
  });
  
  it('should have a name', () => {
    const vampire = new Vampire('Jhun');

    assert.equal(vampire.name, 'Jhun');
  });
  
  it('should have a pet bat as a default', () => {
    const vampire = new Vampire('Brittany');

    assert.equal(vampire.pet, 'bat');
  });
  
  it('should take an argument for pet', () => {
    const vampire = new Vampire('Jeff', 'fox');
    const vampyre = new Vampire('David', 'armadillo');
    
    assert.equal(vampire.pet, 'fox');
    assert.equal(vampyre.pet, 'armadillo');
  });
  
  it('should be thirsty', () => {
    const vampire = new Vampire('Andy');
    
    assert.equal(vampire.thirsty, true);
  });
  
  it('should not be thirsty if vampire has drank', () => {
    const vampire = new Vampire('Meeka');
    
    vampire.drink();
    
    assert.equal(vampire.thirsty, false);
  });
  
  it('should be start with no ounces of blood drank', () => {
    const vampire = new Vampire('Bobby');
    
    assert.equal(vampire.ouncesDrank, 0);
  });
  
  it('should drink 10 ounces of blood at a time', () => {
    const vampire = new Vampire('Margot');
    
    vampire.drink();

    vampire.drink();
    
    vampire.drink();
  
    assert.equal(vampire.ouncesDrank, 30);
  });

  it('should be full after drinking 50 ounces', () => {
    const vampire = new Vampire('Javi');

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 10);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 20);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 30);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 40);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);

    assert.equal(vampire.drink(), 'I\'m too full to drink anymore!');
  });
});
