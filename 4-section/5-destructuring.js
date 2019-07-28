'---------------------'
// destructuring objects
'---------------------'

const obj = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 26,
  location: 'Montreal',
  getInfo() { 
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}, Location: ${city}`);
  }
}

const {firstName, lastName} = obj;
console.log('firstName:', firstName)
console.log('lastName:', lastName)

'---------------------'
// destructuring objects (params)
'---------------------'

const func = (obj) => {
  const name = `${obj.firstName} ${obj.lastName}`;
  console.log(name);
}

func(obj);

// same as below:

const betterFunc = ({firstName, lastName}) => {
  const name = `${firstName} ${lastName}`;
  console.log(name);
}

betterFunc(obj)

'---------------------'
// destructuring arrays
'---------------------'

const arr = ['Jane', 'Doe', 26, 'Montreal'];
const [firstName, lastName] = arr;

console.log('firstName:', firstName);
console.log('lastName:', lastName);

'---------------------'
// destructuring arrays (params)
'---------------------'

const func = (arr) => {
  const name = `${arr[0]} ${arr[1]}`;
  console.log(name);
}

func(arr);

// same as below:

const betterFunc = ([firstName, lastName]) => {
  const name = `${firstName} ${lastName}`;
  console.log(name);
}

betterFunc(arr);

'---------------------'
// rest params
'---------------------'

const restFunc = ([firstName, lastName, ...rest]) => {
  const name = `${firstName} ${lastName}`;
  console.log(name);
  console.log(rest);
}

restFunc(arr);