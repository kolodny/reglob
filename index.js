var glob = require('glob');

module.exports = function(globber) {
  var matches = glob.sync(globber);
  return matches.map(function(file) {
    return require(file);
  });
};
