# qatype
A Simple JavaScript type checking module for JavaScript that returns a `Boolean` or `type name` for each type check.

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

// Usage the similar with above code
qatype.type({}); //Object,It will return type name for object
```

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
