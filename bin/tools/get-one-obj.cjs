"use strict";
exports.__esModule = true;
var f = require("./_for-object.cjs"), s = require("./type-of.cjs"), o = function (t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = []; }
    if (s(r) === "string" && (r = [r]), s(r) !== "array")
        return t;
    var n = {};
    return f(t, function (e, i) { r.includes(i) || (n[i] = e); }), n;
};
module.exports = o;
