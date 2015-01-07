#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

>  A simple search with O(n) complexity. Good for small data amount.


## Install

```sh
$ npm install --save sequential-search
```


## Usage

```js
var sequential = require('sequential-search');

sequential([2, 4, 3, 6, 7, 8], 3); // Return 2
sequential([1, 2], 2); // Return 1
sequential([1, 45, 23], 154); // Return -1
```


## License

MIT © [Neil Kim Gardose](https://github.com/nkpgardose)


[npm-url]: https://npmjs.org/package/sequential-search
[npm-image]: https://badge.fury.io/js/sequential-search.svg
[travis-url]: https://travis-ci.org/nkpgardose/sequential-search
[travis-image]: https://travis-ci.org/nkpgardose/sequential-search.svg?branch=master
[daviddm-url]: https://david-dm.org/nkpgardose/sequential-search.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/nkpgardose/sequential-search
