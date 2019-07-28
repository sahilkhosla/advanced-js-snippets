const firstName = 'jane';
const lastName = 'doe';
const age = 26;
const city = 'Montreal';

'---------------------'
// init
'---------------------'

const obj = {
  firstName,
  lastName,
  age,
  location
}

'---------------------'
// method shorthand
'---------------------'

const obj = {
  firstName,
  lastName,
  age,
  location,
  getInfo() { //compare to getInfo: function() {}
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}, Location: ${city}`);
  }
}

'---------------------'
// dynamic key
'---------------------'

var key = 'country';

const obj = {
  firstName,
  lastName,
  age,
  location,
  [key]: 'Canada', //compare to obj.country = 'Canada' or obj[key] = 'Canada'
  getInfo() { 
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}, Location: ${city}`);
  }
}



