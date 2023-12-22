export class Position {
    protected x: number
    protected y: number


    constructor(x: number, y: number) {
        this.x = x
        this.y = y 

    }

    getX() {
        return this.x
    }
    getY() {
        return this.y
    }


    touch(pos:Position): boolean {
        if (this !== pos) {
            if (pos.getX() == this.x && pos.getY() == this.y) {
                return true
            }
            return false;
        }
        return false
    }

    setPosition(x:number,y:number){
        this.x = x 
        this.y = y
    }

    getPosition(x:number,y:number){
        return this.x
        return this.y
    }

}