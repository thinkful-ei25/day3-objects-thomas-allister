'use strict'
const obj1 = {
  foo: 10,
  bar: 20,
  fum: 30,
  quux: 40,
  spam: 50

};


for (const key in obj1) {
  console.log(key, obj1[key]);
} 
