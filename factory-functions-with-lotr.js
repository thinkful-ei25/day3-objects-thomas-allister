'use strict';

function createCharacter(Name, Nickname, Race, Origin, Attack, Defense) {
  return {
    Name: Name,
    Nickname,
    Race,
    Origin,
    Attack,
    Defense,
    describe: function() {
      console.log(`${this.Name} is a ${this.Race} from ${this.Origin}.`);
    },
    evaluateFight: function(charObj) {
      return `Your opponent takes ${((this.Attack - charObj.Defense > 0) ? this.Attack - charObj.Defense : 0)} damage and you receive ${((charObj.Attack - this.Defense > 0) ? charObj.Attack - this.Defense : 0)} damage`
    }
  };
}

let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
gandalf.describe();
console.log(gandalf.evaluateFight(bilbo));