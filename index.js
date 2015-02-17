var glob = require('glob');

module.exports = function(globber) {
  var matches = glob.sync(globber);
  for (var i = 0; i < matches.length; i++) {
    require(matches[i]);
  }
};
