'use strict';

function Character(params = {}) {
  this.race = params.race;
  this.name = params.name;
  this.language = params.language;
}
Character.prototype.say = function () {
  console.log(`language: ${this.language}, name: ${this.name}`);
};

function Orc(params = {}) {
  Character.call(this, params);
  this.weapon = params.weapon;
}
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function () {
  console.log('Orc hit the enemy');
};

function Elf(params = {}) {
  Character.call(this, params);
  this.spellType = params.spellType;
}
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.castSpell = function () {
  console.log(`Elf cast a spell ${this.spellType}`);
};

const orc = new Orc({
  name: 'Guldan',
  race: 'Orc',
  language: 'Orcish',
  weapon: 'staff',
});

const elf = new Elf({
  name: 'Illidan',
  race: 'Elf',
  language: 'Darnassian',
  spellType: 'lifeDrain',
});
