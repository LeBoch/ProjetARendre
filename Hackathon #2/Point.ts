export class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    touch(pos: Point): boolean {
        if (this !== pos) {
            if (pos.getX() == this.x && pos.getY() == this.y) {
                return true
            }
            return false;
        }
        return false
    }
}