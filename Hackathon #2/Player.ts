import { Api } from "./Api.js";
import { Movable } from "./Movable.js";

export class Player extends Movable {
    protected id: string
    protected rev: string;
    protected assigned: boolean;
    protected color: string;
 
    constructor(x: number, y: number, id: string , rev:string , color:string , assigned:boolean) {
        super(x, y)
        this.id = id;
        this.rev = rev;
        this.assigned = assigned;
        this.color = color;
        
        Api.addEventListener((obj: any) => {
            if (obj._id == this.id) {
                this.x = obj.x
                this.y = obj.y
                this.rev = obj._rev
                this.assigned = obj.assigned
                this.color = obj.color
            }
        })
    }

    getColor() {
        return 'red'
    }
    getId() {
        return this.id
    }

    assign() {
        this.assigned = true
        return this.assigned
    }

    getAssigned(): boolean {
        return this.assigned
    }

    setX(x:number){
        this.x = x
    } 
    
    setY(x:number):void{
        this.x = x
    }
}