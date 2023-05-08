"use strict";
exports.__esModule = true;
var o = { "[object Boolean]": "boolean", "[object Number]": "number", "[object String]": "string", "[object Function]": "function", "[object Array]": "array", "[object Date]": "date", "[object RegExp]": "regexp", "[object Undefined]": "undefined", "[object Null]": "null", "[object Object]": "object", "[object Promise]": "promise", "[object Map]": "map", "[object Set]": "set", "[object Map Iterator]": "map-iterator", "[[object Symbol]]": "symbol", "[object Module]": "module" };
function c(t) { var e = Object.prototype.toString.call(t); return o[e] || e.replaceAll(new RegExp(/\[|\]|object /g), ""); }
module.exports = c;
