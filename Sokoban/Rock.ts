import { Movable } from "./Movable.js";

export class Rock extends Movable {

    protected isWalkable:boolean = false
    constructor(x:number,y:number){
        super(x,y)
    }
    

    public getIsWalkable():boolean{
        return this.isWalkable
    }

}