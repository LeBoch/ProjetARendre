import { Display } from "./Display.js";
import { Hole } from "./Hole.js";
import { Player } from "./Player.js";
import { Position } from "./Position.js";
import { Rock } from "./Rock.js";
import { Direction } from "./direction.js";
export class Game {
    constructor(width, height) {
        this.direction = Direction.DOWN;
        this.rock = new Rock(10, 16);
        this.hole = new Hole(10, 15);
        this.player = new Player(13, 15);
        this.width = width;
        this.height = height;
        this.display = new Display(40, 50);
    }
    run() {
        this.setRandomPosition(this.hole, 0);
        this.setRandomPosition(this.player, 0);
        this.setRandomPosition(this.rock, 2);
        if (this.isMovable()) {
            this.handleEvents();
        }
        this.display.draw(this);
    }
    getRandomPosition(padding) {
        let isUsed = false;
        let x = 0;
        let y = 0;
        while (!isUsed) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            if ((x == this.hole.getX() && y == this.hole.getY()) || (x == this.player.getX() && y == this.player.getY()) || (x == this.rock.getX() && y == this.rock.getY())) {
                isUsed = false;
            }
            isUsed = true;
            {
                if (x == 0) {
                    x = x + padding;
                }
                if (y == this.height) {
                    y = y - padding;
                }
                if (y == 0) {
                    y = y + padding;
                }
                if (x == this.width) {
                    x = x - padding;
                }
            }
        }
        return [x, y];
    }
    setRandomPosition(pos, pad) {
        let newPos = this.getRandomPosition(pad);
        this.getRandomPosition(pad);
        pos.setPosition(newPos[0], newPos[1]);
    }
    handleEvents() {
        let x = this.player.getX();
        let y = this.player.getY();
        document.onkeydown = (e) => {
            switch (e.keyCode) {
                case 37:
                    x = x - 1;
                    break;
                case 38:
                    y = y - 1;
                    break;
                case 39:
                    x = x + 1;
                    break;
                case 40:
                    y = y + 1;
                    break;
            }
            // this.isMovable() ? this.player.move(x, y) : this.player.move(this.player.getX(),this.player.getY())
            this.display.draw(this);
        };
    }
    getRock() {
        return this.rock;
    }
    getHole() {
        return this.hole;
    }
    getPlayer() {
        return this.player;
    }
    isMovable() {
        let temporaryPosition = new Position(this.width, this.height);
        if (this.player.touch(temporaryPosition)) {
            return false;
        }
        return true;
    }
}
