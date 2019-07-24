//--- a.

// run that in the console 
var person = {name: 'Jane'};

// now type - do you see any methods? where did they come from?
person.

// try
person.hasOwnProperty('name'); //true
person.hasOwnProperty('age'); //false

//--- b. 

// run this in the console
var arr = ['apples', 'oranges'];
console.log(arr);

// now try to find 'hasOwnProperty' method on prototype chain

//--- c.

// Everything is an object!

const obj = {}
const arr = []
console.log(obj.__proto__.constructor);
console.log(arr.__proto__.constructor);
console.log(arr.__proto__.__proto__.constructor);

//--- d.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function() {
    console.log(`Person info: Name -> ${this.name}, Age -> ${this.age}`);
  } 
}

const p1 = new Person('Jane', '25');
const p2 = new Person('John', '52');

// both p1 and p2 get their own "getInfo" function
// fix it with protoype

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function() {
  console.log(`Person info: Name -> ${this.name}, Age -> ${this.age}`);
} 

const p1 = new Person('Jane', '25');
const p2 = new Person('John', '52');

// extend an existing API
Array.prototype.first = function() {
  if (this.length) {
    console.log(`First element is ${this[0]}`);
  } else {
    console.log('Array is empty :(')
  }
}

var arr1 = ['apple', 'orange'];
var arr2 = [];
var arr3;

arr1.first()
arr2.first()
arr3.first();
