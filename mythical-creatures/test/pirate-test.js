const assert = require('chai').assert;
const Pirate = require('../exercises/pirate');

describe('Pirate', () => {

  const timeTravel = (pirate, limit) => {
    for(let i = 0; i < limit; i++) {
      pirate.robShip();
    }
  }

  it('should instantiate our good friend, Pirate', () => {
    const dreadPirateRoberts = new Pirate();

    assert.instanceOf(dreadPirateRoberts, Pirate);
  });

  it('should have a name', () => {
    const blackbeard = new Pirate('Blackbeard');
    const chengISao = new Pirate('Cheng I Sao');

    assert.equal(blackbeard.name, 'Blackbeard');
    assert.equal(chengISao.name, 'Cheng I Sao');
  });

  it('should be a scallywag by default', () => {
    const pirate = new Pirate('Anne Bonny');

    assert.equal(pirate.name, 'Anne Bonny');
    assert.equal(pirate.job, 'scallywag');
  });

  it('should be able to have another job', () => {
    const david = new Pirate('David', 'cook');
    const pam = new Pirate('Pam', 'captain');

    assert.equal(david.job, 'cook');
    assert.equal(pam.job, 'captain');
  });

  it('should not be cursed by default', () => {
    const pirate = new Pirate('Mary Read', 'cook');

    assert.equal(pirate.cursed, false);
  });

  it('should be able to rob ships', () => {
    const pirate = new Pirate('Grace OMalley');

    assert.equal(pirate.robShip(), 'YAARRR!');
  });

  it('should start with a booty of 0', () => {
    const pirate = new Pirate('Rachel Wall');

    assert.equal(pirate.booty, 0);
  });

  it('should get 100 gold pieces when robbing a ship', () => {
    const pirate = new Pirate('Hannah');

    pirate.robShip();

    assert.equal(pirate.booty, 100);

    pirate.robShip();

    assert.equal(pirate.booty, 200);
  });

  it('should get cursed after robbing 5 ships instead of getting money', () => {
    const pirate = new Pirate('Robbie');

    pirate.robShip();

    pirate.robShip();

    pirate.robShip();

    pirate.robShip();

    pirate.robShip();

    assert.equal(pirate.booty, 500);

    pirate.robShip();

    assert.equal(pirate.booty, 500);
    assert.equal(pirate.cursed, true);
    assert.equal(pirate.robShip(), 'ARG! I\'ve been cursed!');
  });

  it('should be able to lift curse for 300 booty', () => {
    const pirate = new Pirate('Scott');

    timeTravel(pirate, 6);

    assert.equal(pirate.liftCurse(), 'Your curse has been lifted!');
    assert.equal(pirate.booty, 200);
    assert.equal(pirate.cursed, false);
  });

  it('should only be able to lift curse if cursed', () => {
    const pirate = new Pirate('Kayla', 'captain');

    pirate.robShip();

    assert.equal(pirate.booty, 100);
    assert.equal(pirate.liftCurse(), 'You don\'t need to lift a curse!');
    assert.equal(pirate.booty, 100);
  });

  it('should be forgiven for previous robberies when the curse is lifted', () => {
    const pirate = new Pirate('Penny');

    timeTravel(pirate, 7);

    assert.equal(pirate.robberies, 7);
    assert.equal(pirate.booty, 500);
    assert.equal(pirate.liftCurse(), 'Your curse has been lifted!');
    assert.equal(pirate.booty, 200);
    assert.equal(pirate.cursed, false);
    assert.equal(pirate.robberies, 0);
  })

  it('should be able to summon the Kraken if captain', () => {
    const lowlyScallywag = new Pirate('Gary');
    const headHoncho = new Pirate('Pete', 'captain');

    assert.equal(lowlyScallywag.summonKraken(), 'You don\'t have that kind of power!');
    assert.equal(lowlyScallywag.summonedKraken, false);

    assert.equal(headHoncho.summonKraken(), 'UNLEASH THE KRAKEN!');
    assert.equal(headHoncho.summonedKraken, true);
  });

  it('should only be able to summon the Kraken when not cursed', () => {
    const pirate = new Pirate('Jack', 'captain');

    timeTravel(pirate, 6);

    pirate.summonKraken();
    
    assert.equal(pirate.cursed, true);
    assert.equal(pirate.summonedKraken, false);
    assert.equal(pirate.summonKraken(), 'You must lift your curse first!');

    assert.equal(pirate.booty, 500);

    pirate.liftCurse();

    assert.equal(pirate.booty, 200);
    assert.equal(pirate.cursed, false);

    assert.equal(pirate.summonKraken(), 'UNLEASH THE KRAKEN!');
    assert.equal(pirate.summonedKraken, true);
  });

  it('should rob five ships after summoning the Kraken', () => {
    const pirate = new Pirate('Davy Jones', 'captain');

    assert.equal(pirate.robberies, 0);
    assert.equal(pirate.cursed, false);

    pirate.summonKraken();

    assert.equal(pirate.summonedKraken, true);
    assert.equal(pirate.robberies, 5);
    assert.equal(pirate.booty, 500);
    assert.equal(pirate.cursed, false);

    pirate.robShip();

    assert.equal(pirate.robberies, 6);
    assert.equal(pirate.booty, 500);
    assert.equal(pirate.cursed, true);
  });
});
