import { Movable } from "./Movable.js"

export class Player extends Movable {
    constructor(x: number, y: number) {
        super(x, y)
    }
}