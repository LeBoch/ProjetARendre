import { Drawer } from "./Drawer.js";
import { Game } from "./Game.js";

export class Display {
    private drawer: Drawer

    constructor(width: number, height: number) {
        this.drawer = new Drawer(width, height)
    }
    draw(game: Game) {
        let h = game.getHole()
        let p = game.getPlayer()
        let r = game.getRock()
        this.drawer.clear()
        this.drawer.drawRectangle(p.getX(), p.getY(), "red")
        this.drawer.drawRectangle(h.getX(), h.getY(), "black")
        this.drawer.drawRectangle(r.getX(), r.getY(), "blue")
    }
    
}