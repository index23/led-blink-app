var LedBlink = function() {
  var state = 0;

  var getState = function() {
    return state;
  };

  var setState = function(x) {
    state = x;
  }

  return {
    getStateApi: getState,
    setStateApi: setState
  }
}

module.exports = LedBlink;
