"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var c = require("./is-object.cjs"), o = require("./is-array.cjs"), M = require("./_for-each.cjs"), u = require("./_for-object.cjs"), _ = require("./arr2-merger.cjs");
require("./type-of.cjs");
var q = function (f, s, e) {
    if (f === void 0) { f = {}; }
    if (s === void 0) { s = {}; }
    if (e === void 0) { e = {}; }
    return !c(f) || !c(s) || !c(e) || (u(f, function (r, t) { var i = s[t], n; i ? (c(r) ? n = q(r, i) : o(r) ? o(i) ? n = _(r, i) : i && (n = __spreadArray(__spreadArray([], __read(r), false), [i], false)) : o(i) ? n = __spreadArray([r], __read(i), false) : n = i, e[t] = n) : e[t] = r; }), u(s, function (r, t) { e[t] || (e[t] = r); })), e;
}, g = function (f) {
    if (f === void 0) { f = {}; }
    var s = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        s[_i - 1] = arguments[_i];
    }
    var e = {};
    return M(s, function (r) { q(f, r, e); }), e;
};
module.exports = g;
