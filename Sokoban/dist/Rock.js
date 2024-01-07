import { Movable } from "./Movable.js";
export class Rock extends Movable {
    constructor(x, y) {
        super(x, y);
        this.isMovable = true;
    }
    getIsMovable() {
        return this.isMovable;
    }
    blockRock() {
        this.isMovable = false;
    }
}
