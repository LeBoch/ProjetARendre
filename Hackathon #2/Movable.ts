import { Point } from "./Point.js";
export class Movable extends Point {
    public isMovable : boolean = true;

    constructor(x:number,y:number) {
        super(x,y)
    }

    move(x: number, y: number) {
        this.x = x
        this.y = y
    }

    getMovable():boolean{
        return this.isMovable
    }
    setMovable():boolean {
        this.isMovable = false
        return this.isMovable
    }
}