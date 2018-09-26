'use strict';
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

function validateKeys(object, expectedKeys) {
  let keys = Object.keys(object);
  if (keys.length !== expectedKeys.length) {
    return false;
  }
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== expectedKeys[i]) {
      return false;
    }
  }
  return true;
}


const expectedKeys = ['id', 'name', 'age', 'city'];

console.log(validateKeys(objectA, expectedKeys));
console.log(validateKeys(objectB, expectedKeys));