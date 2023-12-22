import { Drawer } from "./Drawer.js";
export class Display {
    constructor(width, height, scale) {
        this.drawer = new Drawer(width, height, scale);
    }
    draw(game) {
        let s = game.getSnake();
        let a = game.getApple();
        this.drawer.clear();
        this.drawer.drawRectangle(a.getX(), a.getY(), "red");
        let body = s.getBody();
        for (let i = 0; i < body.length; i++) {
            this.drawer.drawRectangle(body[i].getX(), body[i].getY(), "blue");
        }
    }
}
