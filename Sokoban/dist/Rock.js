import { Movable } from "./Movable.js";
export class Rock extends Movable {
    constructor(x, y) {
        super(x, y);
        this.isWalkable = false;
    }
    getIsWalkable() {
        return this.isWalkable;
    }
}
