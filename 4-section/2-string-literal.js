// 1.
// terrible ES5 syntax (string concat)

var person = {
  firstName: 'Jane',
  lastName: 'Doe'
}

console.log('Hello, My name is ' + person.name + ' ' + person.lastName);

// 2.
// fix with template strings
console.log(`Hello, My name is ${person.firstName} ${person.lastName}`);