import { Point } from "./Point.js";
export class Movable extends Point {
    constructor(x, y) {
        super(x, y);
        this.isMovable = true;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    getMovable() {
        return this.isMovable;
    }
    setMovable() {
        this.isMovable = false;
        return this.isMovable;
    }
}
