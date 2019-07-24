// a.
function Watch(options) {
  this.brand = options.brand;  
}

Watch.prototype.time = function() {
  console.log(new Date(Date.now()).toLocaleString());
}

function SmartWatch(options) {
  Watch.call(this, options);
  this.type = 'smart';
}

SmartWatch.prototype.steps = function() {
  console.log(Math.floor(Math.random() * 10000));
}

// b. 
// fix inheritance 35,36
function Watch(options) {
  this.brand = options.brand;  
}

Watch.prototype.time = function() {
  console.log(new Date(Date.now()).toLocaleString());
}

function SmartWatch(options) {
  Watch.call(this, options);
  this.type = 'smart';
}

// inherit from Watch
SmartWatch.prototype = Object.create(Watch.prototype);
SmartWatch.prototype.constructor = SmartWatch;

SmartWatch.prototype.steps = function() {
  console.log(Math.floor(Math.random() * 10000));
}

// c.
// es6 classes

class Watch {
  constructor(options) {
    this.brand = options.brand;
  }

  time() {
    console.log(new Date(Date.now()).toLocaleString());
  }
}

class SmartWatch extends Watch {
  constructor(options) {
    // super(options);
    this.type = 'smart';
  }

  steps() {
    console.log(Math.floor(Math.random() * 10000));
  }
}