"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var commander_1 = require("commander");
var actions_1 = __importDefault(require("./actions"));
console.log('仙王');
commander_1.program
    .command('ls')
    .description('List all the registries')
    .action(actions_1["default"].onList);
