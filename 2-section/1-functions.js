var obj = {};

console.log(obj);

var obj2 = {};
var func = function() {
  console.log('hi from func!');
}

obj2.func = func;

console.log(obj2);

// obj(); // error not a function

// can be invoked
obj2.func();

// since it's an object, you can access other properties
console.log(func.name); 


// --------

// run the following code and check the error in the console
sayHi();
sayHello();

// declaration
function sayHi() {
  console.log('hi!');
}

// expression
var sayHello = function() {
  console.log('hello!');
}

function caller(func) {
  if (typeof func === 'function') {
    func();
  } else {
    console.log('not a function!');
  }
}