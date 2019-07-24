// 1.
function makeFunc() {
  var name = 'Pearson';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
console.log(myFunc);

// run the following line in the console
// myFunc();

// 2.

function createClosure() {
  var name = 'Pearson';

  setTimeout(function() {
    console.log('Timed out', name)
  }, 2000);

  console.log('I am done executing!');
}

// createClosure();

// 3.

for (var i = 0; i < 3; i++) {
  setTimeout(function() {    
    console.log('Timed out', val)
  }, 2000);
}

for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log('Timed out', i)
    }, 2000)
  })(i);
}

for (var i = 0; i < 3; i++) {
  let j = i;
  setTimeout(function() {
    console.log('Timed out', j)
  }, 2000)
}

