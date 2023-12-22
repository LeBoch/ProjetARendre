import { Position } from "./position.js";
export class Apple extends Position {
    constructor(x, y) {
        super(x, y);
    }
    setApple(x, y) {
        this.x = x;
        this.y = y;
    }
}
