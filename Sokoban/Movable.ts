import { Position } from "./Position.js"

export class Movable extends Position {
    constructor(x: number, y: number) {
        super(x, y)
    }

    public move(x: number, y: number) {
        this.x = x
        this.y = y
        
    }
}