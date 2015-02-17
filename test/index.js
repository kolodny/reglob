var assert = require('assert');
var reglob = require('..');

describe('reglob', function() {
  beforeEach(function() {
    global.playground = {};
  });
  it('requires every file the glob matches', function() {
    reglob(__dirname + '/*.es');
    assert(global.playground.moduleLoaded);
  });
  it("doesn't require anything the glob doesn't match", function() {
    reglob(__dirname + '/*.json');
    assert(!global.playground.moduleLoaded);
  });
});
