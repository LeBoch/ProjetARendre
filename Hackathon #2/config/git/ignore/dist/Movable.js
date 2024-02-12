"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movable = void 0;
const Point_js_1 = require("./Point.js");
class Movable extends Point_js_1.Point {
    constructor(x, y) {
        super(x, y);
        this.isMovable = false;
    }
}
exports.Movable = Movable;
