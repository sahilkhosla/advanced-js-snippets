var counter = (function() {
  // private
  var count = 0;

  function log() {
    console.log(count);
  }

  // public
  function incrementCount() {
    count++;
    log();
  }

  function decrementCount() {
    count--;
    log();
  }

  function getCount() {
    return count
  }

  return {
    incrementCount,
    decrementCount,
    getCount
  }

})();

// show this import/export