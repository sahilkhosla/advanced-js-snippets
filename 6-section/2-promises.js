// what is a Promise?
// I promise that I will execute the code and let you know of the success/failure
// Meanwhile, you can move on to other things

'---------------------'
// longGET 
'---------------------'

const longGET = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.65 || true) { // remove true for error
        console.log(`GET: ${num}`);
        resolve(num)
      } else {
        console.log(`Error in GET: ${num}`);
        reject(num);
      }
    }, 1000);
  })
}

'---------------------'
// syntax
'---------------------'

const one = longGET(1); // returns a promise

one
  .then(() => {
    console.log('done');
  })
  .catch(() => {
    console.log('error');
  })

console.log('moved on to other things')

'---------------------'
// sequence (error)
'---------------------'

const one = longGET(1); // returns a promise

one
  .then((num) => {
    longGET(++num)
    console.log('done with 1 and 2'); 
  })
  .catch(() => {
    console.log('error');
  })

'---------------------'
// sequence (fixed)
'---------------------'

// When you return something from a then() callback, it's a bit magic.
// If you return a value, the next then() is called with that value. 
// However, if you return something promise-like, the next then() waits on it, 
// and is only called when that promise settles (succeeds/fails).
    
const one = longGET(1); // returns a promise

one
  .then((num) => {
    return longGET(++num)       
  })
  .then((num) => {
    console.log('done with 1 and 2'); 
  })
  .catch(() => {
    console.log('error');
  })


'---------------------'
// finally
'---------------------'

const one = longGET(1); // returns a promise

one
  .then((num) => {
    return longGET(++num)       
  })
  .then((num) => {
    console.log('done with 1 and 2'); 
  })
  .catch(() => {
    console.log('error');
  })
  .finally(() => {
    console.log('finally, finished executing!');
  })

'---------------------'
// parallel
'---------------------'

// start with all resolve
// add a reject to see catch in action

Promise.all([longGET(1), longGET(2)])
  .then((results) => {
    console.log('done with 1 and 2', results);
  })
  .catch((error) => {
    console.log(`error in ${error}`)
  });

