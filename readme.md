# path-empty [![Build Status](https://travis-ci.org/egoist/path-empty.svg?branch=master)](https://travis-ci.org/egoist/path-empty)

> Check if a path is empty

## Install

```
$ npm install --save path-empty
```

## Usage

```js
const pathEmpty = require('path-empty')

// async mode
pathEmpty('./inori')
	.then(empty => {
		console.log(empty)
		// => false, the path is not empty
	})

// sync mode
pathEmpty.sync('./inori')
// => false, the path is not empty
```

## License

MIT © [EGOIST](https://github.com/egoist)
