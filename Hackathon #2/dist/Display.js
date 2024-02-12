import { Drawer } from "./Drawer.js";
import { Plate } from "./Plate.js";
import { Wall } from "./Wall.js";
export class Display {
    constructor() {
        this.drawer = new Drawer(26, 24, 28);
    }
    draw(game) {
        this.drawer.clear();
        const dataObjects = game.getObjects();
        const size = game.getSize();
        const dataPlayers = game.getPlayers();
        for (let i = 0; i < dataObjects.length; i++) {
            if (dataObjects[i] instanceof Wall) {
                this.drawer.drawCircle(dataObjects[i].getX(), dataObjects[i].getY(), 'black');
            }
            if (dataObjects[i] instanceof Plate) {
                this.drawer.drawCircle(dataObjects[i].getX(), dataObjects[i].getY(), 'purple');
            }
        }
        for (let i = 0; i < dataPlayers.length; i++) {
            if (dataObjects[i] instanceof Plate) {
                this.drawer.drawCircle(dataPlayers[i].getX(), dataPlayers[i].getY(), 'red');
            }
        }
    }
}
