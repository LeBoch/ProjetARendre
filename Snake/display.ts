import { Drawer } from "./Drawer.js";
import { Game } from "./game.js";

export class Display {
    private drawer: Drawer

    constructor(width: number, height: number, scale: number) {
        this.drawer = new Drawer(width, height, scale)
    }
    draw(game: Game) {
        let s = game.getSnake()
        let a = game.getApple()
        this.drawer.clear()
        this.drawer.drawRectangle(a.getX(), a.getY(), "red")

        let body = s.getBody();
        for (let i = 0; i < body.length; i++) {
            this.drawer.drawRectangle(body[i].getX(),  body[i].getY(), "blue")
        }
    }
    
}