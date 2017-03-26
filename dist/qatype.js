/**
 * qatype.js
 * Author:ty4z2008
 * Simple JavaScript type checking module.
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.qatype = factory();
    }
}(this, function() {
    /**
     * plugin name
     */
    var qatype = {};

    //base type
    var _types = ['Array', 'Object', 'String', 'Number', 'Date', 'RegExp', 'Function', 'Boolean', 'Null', 'Undefined'];

    /**
     * Detect Object type
     * @return {String} Array,Object...
     */
    function _type(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }
    /**
     * Use qatype.isFunction(obj) you can detect this type for object
     * qatype.isArray([]); // true
     * qatype.isObject({}); // true
     * qatype.isString(''); // true
     * qatype.isDate(new Date()); // true
     * qatype.isRegExp(/test/i); // true
     * qatype.isFunction(function () {}); // true
     * qatype.isBoolean(true); // true
     * qatype.isNumber(1); // true
     * qatype.isNull(null); // true
     * qatype.isUndefined(); // true
     * @param {Mixed} Object
     * @return {Boolean} true/false
     */
    for (var i = _types.length; i--;) {
        var type = _types[i];
        qatype['is' + type] = (function(self) {
            return function(obj) {
                return _type(obj) === self;
            };
        })(type);
    }
    /**
     * Detect type for Object. It will return type name
     * @param {Mixed} Object
     * @return {String} ...
     */
    qatype['type'] = function(obj) {
        return _type(obj);
    }

    return qatype;
}));
