"use strict";
exports.__esModule = true;
var o = function (t, n) { return n ? t.replace(/[A-Z]/g, function (e, r) { return r ? "-" + e.toLowerCase() : e.toLowerCase(); }) : t.replace(/\-\b(\w)|\-\s(\w)/g, function (e, r) { return r.toUpperCase(); }); };
module.exports = o;
