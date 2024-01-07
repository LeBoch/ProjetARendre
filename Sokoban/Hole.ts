import { Position } from "./Position.js";

export class Hole extends Position {
    protected isWalkable: boolean = false

    constructor(x: number, y: number) {
        super(x, y)
    }

    getIsWalkable(): boolean {
        return this.isWalkable
    }

    allowIsWalkable(): void {
        this.isWalkable = true
    }


}

