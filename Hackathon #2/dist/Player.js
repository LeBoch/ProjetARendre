import { Api } from "./Api.js";
import { Movable } from "./Movable.js";
export class Player extends Movable {
    constructor(x, y, id, rev, color, assigned) {
        super(x, y);
        this.id = id;
        this.rev = rev;
        this.assigned = assigned;
        this.color = color;
        Api.addEventListener((obj) => {
            if (obj._id == this.id) {
                this.x = obj.x;
                this.y = obj.y;
                this.rev = obj._rev;
                this.assigned = obj.assigned;
                this.color = obj.color;
            }
        });
    }
    getColor() {
        return 'red';
    }
    getId() {
        return this.id;
    }
    assign() {
        this.assigned = true;
        return this.assigned;
    }
    getAssigned() {
        return this.assigned;
    }
    setX(x) {
        this.x = x;
    }
    setY(x) {
        this.x = x;
    }
}
