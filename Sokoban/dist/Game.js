import { Display } from "./Display.js";
import { Hole } from "./Hole.js";
import { Player } from "./Player.js";
import { Position } from "./Position.js";
import { Rock } from "./Rock.js";
import { Direction } from "./direction.js";
export class Game {
    constructor(width, height) {
        this.direction = Direction.DOWN;
        this.player = new Player(13, 15);
        this.rock = new Rock(10, 16);
        this.hole = new Hole(10, 15);
        this.width = width;
        this.height = height;
        this.display = new Display(width, height);
    }
    run() {
        this.setRandomPosition(this.hole, 2);
        this.setRandomPosition(this.player, 2);
        this.setRandomPosition(this.rock, 2);
        if (this.isMovable() == true) {
            this.handleEvents();
        }
        this.display.draw(this);
    }
    getRandomPosition(padding) {
        let isUsed = true;
        let x = 0;
        let y = 0;
        while (isUsed) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            if (x === 0) {
                x = x + padding;
            }
            if (y === this.height) {
                y = y - padding;
            }
            if (y === 0) {
                y = y + padding;
            }
            if (x === this.width) {
                x = x - padding;
            }
            isUsed =
                (x == this.hole.getX() && y == this.hole.getY()) ||
                    (x == this.player.getX() && y == this.player.getY()) ||
                    (x == this.rock.getX() && y == this.rock.getY());
        }
        return [x, y];
    }
    setRandomPosition(pos, pad) {
        let newPos = this.getRandomPosition(pad);
        pos.setPosition(newPos[0], newPos[1]);
    }
    handleEvents() {
        document.onkeydown = (e) => {
            let deltaX = 0;
            let deltaY = 0;
            let isWalkable = this.rock.getIsWalkable();
            const oldPosition = new Position(this.player.getX() + deltaX, this.player.getY() + deltaY);
            switch (e.keyCode) {
                case 37:
                    if (this.player.getX() !== 0) {
                        deltaX = -1;
                    }
                    break;
                case 38:
                    if (this.player.getY() !== 0) {
                        deltaY = -1;
                    }
                    break;
                case 39:
                    if ((this.player.getX() !== this.width - 1)) {
                        deltaX = +1;
                    }
                    break;
                case 40:
                    if ((this.player.getY() !== this.height - 1)) {
                        deltaY = +1;
                    }
                    break;
            }
            if (this.hole.touch(this.rock)) {
                isWalkable = true;
            }
            this.player.move(this.player.getX() + deltaX, this.player.getY() + deltaY);
            if (this.player.touch(this.hole) && isWalkable == false) {
                this.player.move(oldPosition.getX(), oldPosition.getY());
            }
            if (this.player.touch(this.rock) && isWalkable == false) {
                if (this.rock.getX() !== 0 && this.rock.getY() !== 0 && this.player.getX() !== this.width - 1 && this.player.getY() !== this.height - 1) {
                    this.rock.move(this.rock.getX() + deltaX, this.rock.getY() + deltaY);
                }
            }
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
