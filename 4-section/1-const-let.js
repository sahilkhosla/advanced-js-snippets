// 1.
// demo problem with using var

function logVars() {
  var x = 1;
  console.log(x);

  if (true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}

// 2. 
// fix with let

function logVars() {
  var x = 1;
  console.log(x);

  if (true) {
    let x = 2;
    console.log(x);
  }

  console.log(x);
}

// 3.
// demo const can't be re-assigned

function logVars() {
  const x = 1;
  console.log(x);

  x = 2;

  console.log(x);
}