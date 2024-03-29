export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    touch(pos) {
        if (this !== pos) {
            if (pos.getX() == this.x && pos.getY() == this.y) {
                return true;
            }
            return false;
        }
        return false;
    }
}
