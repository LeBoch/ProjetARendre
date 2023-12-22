import { Direction } from "./direction.js";
import { Position } from "./position.js";
export class Snake extends Position {
    constructor(x, y) {
        super(x, y);
        this.body = [];
        this.body.push(new Position(x, y));
    }
    growHead(dir) {
        let x = this.body[0].getX();
        let y = this.body[0].getY();
        switch (dir) {
            case Direction.DOWN:
                y = y + 1;
                break;
            case Direction.UP:
                y = y - 1;
                break;
            case Direction.LEFT:
                x = x - 1;
                break;
            case Direction.RIGHT:
                x = x + 1;
                break;
        }
        const head = new Position(x, y);
        this.body.unshift(head);
    }
    cropTail() {
        this.body.pop();
    }
    getBody() {
        return this.body;
    }
    touch(x, y) {
        for (let i = 1; i < this.getBody().length; i++) {
            if (this.getBody()[i].getX() == x && this.getBody()[i].getY() == y) {
                return true;
            }
        }
        return false;
    }
}
