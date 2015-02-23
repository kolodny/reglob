reglob
===

[![Build Status](https://travis-ci.org/kolodny/reglob.svg?branch=master)](https://travis-ci.org/kolodny/reglob)

require a glob

usage

```js
var reglob = require('reglob');

var modules = reglob(__dirname + '/module-mixer-*.js');
```

Don't use `reglob('./files*.js')`, use `reglob(__dirname + '/files*.js')` instead
