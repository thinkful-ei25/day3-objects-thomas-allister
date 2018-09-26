'use strict';
const obj1 = {
  name: 'John',
  jobTitle: 'architect' 
}
const obj2 = {
  name: 'Bob',
  jobTitle: 'carpenter', 
  boss: 'John'
}
const obj3 = {
  name: 'Jim',
  jobTitle: 'foreman', 
  boss: 'John'
}
const obj4 = {
  name: 'Chris',
  jobTitle: 'builder',
  boss: 'John'
}
const obj5 = {
  name: 'James',
  jobTitle: 'manager', 
  boss: 'John'
}

const array1 = [obj1, obj2, obj3, obj4, obj5];

for (const obj of array1) {
  if (!('boss' in obj)) {
    console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`);
  } else {
    console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`);
  }
}
