"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activable = void 0;
const Point_js_1 = require("./Point.js");
class Activable extends Point_js_1.Point {
    constructor(x, y) {
        super(x, y);
        this.isActive = false;
    }
}
exports.Activable = Activable;
