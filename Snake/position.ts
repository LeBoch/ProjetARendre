export class Position{
    protected x:number = 0 
    protected y:number = 0
    
    constructor(x:number,y:number){
        this.x = x
        this.y = y 
    }

    getY(){
        return this.y
    }

    getX(){
        return this.x
    }
}