# qatype.js

[![node](https://img.shields.io/node/v/qatype.js.svg)](https://www.npmjs.com/package/qatype.js)
[![Build Status](https://travis-ci.org/smartFlash/qatype.svg?branch=master)](https://travis-ci.org/smartFlash/qatype)
[![npm](https://img.shields.io/npm/v/qatype.js.svg)](https://www.npmjs.com/package/qatype.js)
[![npm](https://img.shields.io/npm/dt/qatype.js.svg)](https://www.npmjs.com/package/qatype.js)
[![Github file size](https://img.shields.io/github/size/smartFlash/qatype/dist/qatype.min.js.svg)](https://github.com/smartFlash/qatype/dist/qatype.min.js)

A Simple JavaScript type checking module for JavaScript that returns a `Boolean` or `type name` for each type check. It's small (< 0.6kb gzip)

### Usage

```js
qatype.isArray([1,2]); // true
qatype.isObject({a:1}); // true
qatype.isString('test string'); // true
qatype.isDate(new Date()); // true
qatype.isRegExp(/^qatype/i); // true
qatype.isFunction(function () {}); // true
qatype.isBoolean(true); // true
qatype.isNumber(8); // true
qatype.isNull(null); // true
qatype.isUndefined(); // true
qatype.isZero(0); // true
qatype.isPromise((new Promise(resolve,reject)=>{resolve(true)}); // true

// Usage the similar with above code
qatype.type({}); //Object,It will return type name for object
```
### Install

```js
npm install qatype.js
```

### CDN

* [https://unpkg.com/qatype.js/dist/qatype.js](https://unpkg.com/qatype.js/dist/qatype.js)
* [https://unpkg.com/qatype.js/dist/qatype.min.js](https://unpkg.com/qatype.js/dist/qatype.min.js)

### Manual installation
Ensure you're using the files from the dist directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	    <title>qatype.js</title>
	</head>
	<body>
	  <script type="text/javascript" src="dist/qatype.min.js"></script>
	  <script type="text/javascript" >
	  // qatype.js module available
	  </script>
	</body>
</html>
```
### Became a Contributor

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/smartFlash/qatype/issues) or a [pull request](https://github.com/smartFlash/qatype/pulls).



### License

[MIT](http://opensource.org/licenses/MIT)
