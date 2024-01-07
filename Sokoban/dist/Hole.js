import { Position } from "./Position.js";
export class Hole extends Position {
    constructor(x, y) {
        super(x, y);
        this.isWalkable = false;
    }
    getIsWalkable() {
        return this.isWalkable;
    }
    allowIsWalkable() {
        this.isWalkable = true;
    }
}
