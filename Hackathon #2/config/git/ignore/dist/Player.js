"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Movable_js_1 = require("./Movable.js");
class Player extends Movable_js_1.Movable {
    constructor(id, rev, assigned, color, x, y) {
        super(x, y);
        this.id = id;
        this.rev = rev;
        this.assigned = assigned;
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    getId() {
        return this.id;
    }
}
exports.Player = Player;
