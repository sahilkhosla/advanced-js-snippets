function logTarget(message) {
  var logMessage = message || 'target is';
  console.log(this);
  console.log(logMessage, this.target);
}

/* window.onclick = function(e) {
  var lg = logTarget.bind(e);
  lg();
} 

window.onclick = function(e) {
  logTarget.call(e, 'print call message');
}

window.onclick = function(e) {
  logTarget.apply(e, ['print apply message']);
} */