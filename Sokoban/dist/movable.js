import { Position } from "./Position.js";
export class Movable extends Position {
    constructor(x, y) {
        super(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
