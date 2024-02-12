"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const Drawer_js_1 = require("./Drawer.js");
class Display {
    constructor(drawer) {
        this.drawer = new Drawer_js_1.Drawer(8, 8, 8);
    }
}
exports.Display = Display;
