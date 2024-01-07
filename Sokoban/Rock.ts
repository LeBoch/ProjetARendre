import { Movable } from "./Movable.js";

export class Rock extends Movable {

    protected isMovable: boolean = true

    constructor(x: number, y: number) {
        super(x, y)
    }


    public getIsMovable(): boolean {
        return this.isMovable
    }

    public blockRock(): void {
        this.isMovable = false
    }

}