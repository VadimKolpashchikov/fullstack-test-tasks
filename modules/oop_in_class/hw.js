'use strict';
class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  say() {
    console.log(`language: ${this.language}, name: ${this.name}`);
  }
}

class Orc extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  say() {
    console.log(`${this.name}: Waaagh!`);
  }

  hit() {
    console.log('Orc hit the enemy');
  }
}

class Elf extends Character {
  constructor(race, name, language, spellType) {
    super(race, name, language);
    this.spellType = spellType;
  }

  say() {
    console.log(`${this.name}: За Калимдор!`);
  }

  castSpell() {
    console.log(`Elf cast a spell ${this.spellType}`);
  }
}

const orc = new Orc('Guldan', 'Orc', 'Orcish', 'staff');
const elf = new Elf('Illidan', 'Elf', 'Darnassian', 'lifeDrain');
