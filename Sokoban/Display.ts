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

        for (let i = 0; i < h.length; i++) {
            this.drawer.drawRectangle(h[i].getX(), h[i].getY(), "black")
        }

        for (let i = 0; i < r.length; i++) {
            this.drawer.drawRectangle(r[i].getX(), r[i].getY(), "blue")
        }
        this.drawer.drawRectangle(p.getX(), p.getY(), "red")

    }

}