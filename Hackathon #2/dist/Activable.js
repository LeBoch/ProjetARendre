import { Point } from "./Point.js";
export class Activable extends Point {
    constructor(x, y) {
        super(x, y);
        this.isActive = false;
    }
    getActive() {
        return this.isActive;
    }
    falseActive() {
        this.isActive = false;
        return this.isActive;
    }
    setActive() {
        this.isActive = true;
        return this.isActive;
    }
}
