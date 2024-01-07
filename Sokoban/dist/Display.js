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
        for (let i = 0; i < h.length; i++) {
            this.drawer.drawRectangle(h[i].getX(), h[i].getY(), "black");
        }
        for (let i = 0; i < r.length; i++) {
            this.drawer.drawRectangle(r[i].getX(), r[i].getY(), "blue");
        }
        this.drawer.drawRectangle(p.getX(), p.getY(), "red");
    }
}
