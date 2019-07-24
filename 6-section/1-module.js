var counter = (function() {
  var count = 0;

  function log() {
    console.log(count);
  }

  function incrementCount() {
    count++;
    log();
  }

  function decrementCount() {
    count--;
    log();
  }

  return {
    incrementCount: function() {
      incrementCount();
    },

    decrementCount: function() {
      decrementCount();
    },

    getCount: function() {
      return count;
    }
  }

})();