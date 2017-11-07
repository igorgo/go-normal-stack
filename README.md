# go-normal-stack
[![Build Status](https://travis-ci.org/igorgo/go-normal-stack.svg?branch=master)](https://travis-ci.org/igorgo/go-normal-stack)

Normalizes the lines of an error stack over the working dir.

Can be useful to reduces the size of the error's logfile.

## Usage

```
$ npm install --save go-normal-stack
```

```js
const normalStack = require('go-normal-stack')
const error = new Error('Some error message')

console.log(error.stack)
// Error: Some error message
//     at Object.<anonymous> (/Users/igor-go/dev/proj254/tst.js:6:15)
//     at Module._compile (module.js:624:30)
//     at Object.Module._extensions..js (module.js:635:10)
//     ...

console.log(normalStack(error))
// Error: Some error message; Object.<anonymous> (/tst.js:6:15); Module._compile (module.js:624:30); Object.Module._extensions..js (module.js:635:10); ...

console.log(normalStack(error.stack))
// Error: Some error message; Object.<anonymous> (/tst.js:6:15); Module._compile (module.js:624:30); Object.Module._extensions..js (module.js:635:10); ...
```

## Test
```
$ npm test
```
