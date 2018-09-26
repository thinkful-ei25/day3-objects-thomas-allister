'use strict';
const obj1 = {
  name: 'John',
  jobTitle: 'architect' 
}
const obj2 = {
  name: 'Bob',
  jobTitle: 'carpenter' 
}
const obj3 = {
  name: 'Jim',
  jobTitle: 'foreman' 
}
const obj4 = {
  name: 'Chris',
  jobTitle: 'builder' 
}
const obj5 = {
  name: 'James',
  jobTitle: 'manager' 
}

const array1 = [obj1, obj2, obj3, obj4, obj5];

for (const obj of array1) {
console.log(obj.jobTitle, obj.name);
}
