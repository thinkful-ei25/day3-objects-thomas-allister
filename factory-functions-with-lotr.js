'use strict';

function createCharacter(name, nickName, race, origin, attack, defense, weapon) {
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`);
    },
    evaluateFight: function(charObj) {
      return `Your opponent takes ${((this.attack - charObj.defense > 0) ? this.attack - charObj.defense : 0)} damage and you receive ${((charObj.attack - this.defense > 0) ? charObj.attack - this.defense : 0)} damage`
    }
  };
}

let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff');
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring');
gandalf.describe();
console.log(gandalf.evaluateFight(bilbo));

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 5, 5, 'Hadhafang'));
let aragorn = characters.find(function(character) {
  return character.nickName === 'aragorn';
} );
aragorn.describe();

const hobbits = characters.filter(function(character) {
  return character.race === 'Hobbit';
});
console.log(hobbits);

const highAttack = characters.filter(function(character) {
  return character.attack > 5;
});
console.log(highAttack);

