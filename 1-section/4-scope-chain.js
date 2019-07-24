//run the code and notice that red is logged twice - once by second and once by the last line
var color = 'red';

function first() {
  var color = 'green';
  console.log(color);
  second();
}

function second() {
  console.log(color);
}

first();
console.log(color);
