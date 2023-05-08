"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.forEach = exports.forObject = exports.isArray = exports.getOneObj = exports.deepMerge = exports.typeOf = exports.getEntry = exports.VERSION = exports.isDirectory = exports.dirname = exports.resolve = exports.exists = exports.rootPath = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
exports.rootPath = path_1["default"].resolve(__dirname, '..', '..', '..', '..');
exports.exists = fs_1["default"].existsSync;
var resolve = function resolve(dir, _path) {
    return path_1["default"].join(process.cwd(), _path === undefined ? '.' : _path, dir).replace(/\\/g, '/');
};
exports.resolve = resolve;
var dirname = function dirname(_path, _dir) {
    if (_dir === void 0) { _dir = __dirname; }
    return path_1["default"].join(_dir, _path).replace(/\\/g, '/');
};
exports.dirname = dirname;
var isDirectory = function (path_string) {
    return fs_1["default"].lstatSync(path_string).isDirectory();
};
exports.isDirectory = isDirectory;
var type_of_cjs_1 = __importDefault(require("./tools/type-of.cjs"));
exports.typeOf = type_of_cjs_1["default"];
var deep_merge_cjs_1 = __importDefault(require("./tools/deep-merge.cjs"));
exports.deepMerge = deep_merge_cjs_1["default"];
var get_one_obj_cjs_1 = __importDefault(require("./tools/get-one-obj.cjs"));
exports.getOneObj = get_one_obj_cjs_1["default"];
var is_array_cjs_1 = __importDefault(require("./tools/is-array.cjs"));
exports.isArray = is_array_cjs_1["default"];
var _for_object_cjs_1 = __importDefault(require("./tools/_for-object.cjs"));
exports.forObject = _for_object_cjs_1["default"];
var _for_each_cjs_1 = __importDefault(require("./tools/_for-each.cjs"));
exports.forEach = _for_each_cjs_1["default"];
exports.VERSION = process.env.npm_package_version || "";
var getEntry = function (sourceObj, include) {
    if (sourceObj === void 0) { sourceObj = {}; }
    if (!include || !include.length)
        return sourceObj;
    var res = {};
    (0, _for_object_cjs_1["default"])(sourceObj, function (el, key) {
        if (include.includes(key)) {
            res[key] = el;
        }
    });
    return res;
};
exports.getEntry = getEntry;
