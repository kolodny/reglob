var assert = require('assert');
var reglob = require('..');

describe('reglob', function() {
  beforeEach(function() {
    global.playground = {};
  });
  it('requires every file the glob matches', function() {
    var modules = reglob(__dirname + '/*.es');
    assert.deepEqual(modules, ['module']);
    assert(global.playground.moduleLoaded);
  });
  it("doesn't require anything the glob doesn't match", function() {
    var modules = reglob(__dirname + '/*.json');
    assert.deepEqual(modules, [{whatsThis: 'data.json'}]);
    assert(!global.playground.moduleLoaded);
  });
});
