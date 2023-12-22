import { Drawer } from "./Drawer.js";
export class Display {
    constructor(width, height) {
        this.drawer = new Drawer(width, height);
    }
    draw(game) {
        let h = game.getHole();
        let p = game.getPlayer();
        let r = game.getRock();
        this.drawer.clear();
        this.drawer.drawRectangle(h.getX(), h.getY(), "black");
        this.drawer.drawRectangle(r.getX(), r.getY(), "blue");
        this.drawer.drawRectangle(p.getX(), p.getY(), "red");
    }
}
