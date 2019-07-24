function func1() {
  console.log('func1', this);
}

var func2 = function() {
  console.log('func2', this);
}

(function() {
  console.log('IIFE', this);
})();

var obj = {
  name: 'an object',
  func: function() {
    console.log('obj.func', this);
  }
}

obj.func();

// ---

var obj = {
  name: 'an object',
  func: function() {
    function inFunc() {
      console.log('in func', this.name); // this will be pointing to window (js flaw?)
    }
    console.log('obj.func', this.name);
    inFunc();
  }
}

obj.func();

// --- 

var obj = {
  name: 'an object',
  func: function() {
    var that = this; // remedy
    function inFunc() {      
      console.log('in func', that);
    }
    console.log('obj.func', that);
    inFunc();
  }
}

obj.func();

