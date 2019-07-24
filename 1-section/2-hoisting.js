// run the following code and notice what's logged

var name = 'foo';

function greet() {
  console.log('hello!');
}

console.log(name);
greet();

// now run the following code - notice that there was no error (js is aware of them)

console.log(name);
greet();

var name = 'foo';

function greet() {
  console.log('hello!');

}

// notice that you can invoke the function before it's defined in the code
// finally run the following code - notice that the difference in the 2 outputs

console.log(name);
var name = 'foo';
console.log(name);


