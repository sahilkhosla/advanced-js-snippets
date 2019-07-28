// what is a callback?
// I will call you back!

'---------------------'
// second before first :(
'---------------------'

// long running function
function first() {
  setTimeout(() => {
    console.log(1)
  }, 500);
}

function second() {
  console.log(2);
}

first();
second(); 


'---------------------'
// accept callback
'---------------------'

// I take a long time to execute 
// I do not want to keep you waiting for me
// Just let me know what I should do once I am done
// You can move on to other things

function first(callback) {
  setTimeout(() => {
    console.log(1)
    callback();
  }, 500);
}

function second() {
  console.log(2);
}

first(second);
console.log('moving on to other things..');

'---------------------'
// callback hell
'---------------------'

function longGET(num, time, cb) {
  setTimeout(() => {    
    console.log(`GET: ${num}`);
    cb(num);
  }, time);
}

// hell
longGET(1, 500, function(num) {
  longGET(++num, 700, function(num) {
    longGET(++num, 300, function(num) {
      console.log('done') ;
    })    
  })
})


