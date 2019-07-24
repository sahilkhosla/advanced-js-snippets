// ---- game: part 1 ----

var game = (function createGame(initialScore) {
  var score = 0 || initialScore;

  function getScore() {
    console.log(score);
  }

  function incrementScore() {
    score++;
    getScore();
  }

  return {
    getScore: getScore,
    incrementScore: incrementScore  
  }

})(5);

game.getScore();
game.incrementScore();


// ---- game: part 2 ----

(function createGame() {
  var negative = 0;
  var positive = 0;

  function getScore() {
    console.clear();
    console.log('Score: ' + (positive - negative));
  }

  function printScoreTable() {
    console.table({positive, negative, score: (positive - negative)});
  }

  function incrementScore() {
    positive++;
    getScore();
  }

  function decrementScore() {
    negative++;
    getScore();
  }

  window.onclick = function(e) {
    if (e.clientY <= 200) {
      decrementScore();
    } else {
      incrementScore();
    }
  }

  window.onkeypress = function(e) {
    if(e.key === 's') {
      printScoreTable();
    }
  }

})();
