import { Point } from "./Point.js";

export class Activable extends Point {
    protected isActive: boolean = false;

    constructor(x: number, y: number) {
        super(x, y)
    }

    getActive(): boolean {
        return this.isActive
    }

    falseActive(): boolean {
        this.isActive = false
        return this.isActive
    }

    setActive(): boolean {
        this.isActive = true
        return this.isActive
    }

}