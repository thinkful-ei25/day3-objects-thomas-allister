'use strict';

let message = 'craft block argon meter bells brown croon droop';
const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,

}

function decode(word, cipher) {
  let decodedWord = '';
  
  if (!(word[0] in cipher)) {
    decodedWord += ' ';
  } else {
    decodedWord = word[cipher[word[0]]];
  }
    return decodedWord;

}

// console.log(decode(word, cipher));

function decodeWords(message) {
  let messageArray = message.split(' ');
  
  let answer = '';
  for (const word of messageArray) {
    answer += decode(word, cipher);
  }
  return answer;
}
console.log(decodeWords(message)); 