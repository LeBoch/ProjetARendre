import { Display } from "./Display.js"
import { Hole } from "./Hole.js"
import { Player } from "./Player.js"
import { Position } from "./Position.js"
import { Rock } from "./Rock.js"
import { Direction } from "./direction.js"

export class Game {
    protected player: Player
    protected rock: Rock
    protected hole: Hole
    protected width: number
    protected height: number
    protected direction: Direction = Direction.DOWN
    protected display: Display

    constructor(width: number, height: number) {
        this.rock = new Rock(10, 16)
        this.hole = new Hole(10, 15)
        this.player = new Player(13, 15)
        this.width = width
        this.height = height
        this.display = new Display(width, height)
    }

    public run() {

        this.setRandomPosition(this.hole, 0)
        this.setRandomPosition(this.player, 0)
        this.setRandomPosition(this.rock, 2)
        this.handleEvents()
        if (this.isMovable() == true) {
            this.handleEvents()
        }
        this.display.draw(this)
    }

    public getRandomPosition(padding: number) {
        let isUsed: boolean = false
        let x: number = 0
        let y: number = 0
        while (!isUsed) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);

            if ((x == this.hole.getX() && y == this.hole.getY()) || (x == this.player.getX() && y == this.player.getY()) || (x == this.rock.getX() && y == this.rock.getY())) {
                isUsed = false
            }
            isUsed = true
            {
                if (x == 0) {
                    x = x + padding
                }
                if (y == this.height) {
                    y = y - padding
                }
                if (y == 0) {
                    y = y + padding
                }
                if (x == this.width) {
                    x = x - padding
                }
            }
        }
        return [x, y]
    }

    public setRandomPosition(pos: Position, pad: number) {
        let newPos: number[] = this.getRandomPosition(pad)
        this.getRandomPosition(pad)
        pos.setPosition(newPos[0], newPos[1])
    }


    handleEvents() {
        document.onkeydown = (e) => {
            let x = this.player.getX()
            let y = this.player.getY()
            const newPosition = new Position(x, y)
            switch (e.keyCode) {
                case 37:
                    if ((this.player.getX() !== 0)) {
                        x = x - 1
                    }
                    break;
                case 38:
                    if ((this.player.getY() !== 0)) {
                        y = y - 1
                    }
                    break;
                case 39:
                    if ((this.player.getX() !== this.width - 1)) {
                        x = x + 1
                    }
                    break;
                case 40:
                    if ((this.player.getY() !== this.height - 1)) {
                        y = y + 1
                    }
                    break;
            }
            // this.isMovable() ?  : this.player.move(this.player.getX(),this.player.getY())
            this.player.move(x, y)
            if (this.player.touch(this.hole)) {
                this.player.move(newPosition.getX(), newPosition.getY())
            }
            if (this.player.touch(this.rock) && (newPosition.getX() - x == 1)) {
                console.log('coucou')
                this.rock.move(this.rock.getX() - 1, this.rock.getY())
            }
            if (this.player.touch(this.rock) && (newPosition.getX() - x == -1)) {
                console.log('coucou')
                this.rock.move(this.rock.getX() + 1, this.rock.getY())
            }
            if (this.player.touch(this.rock) && (newPosition.getY() - y == 1)) {
                console.log('coucou')
                this.rock.move(this.rock.getX(), this.rock.getY() - 1)
            }
            if (this.player.touch(this.rock) && (newPosition.getY() - y == -1)) {
                console.log('coucou')
                this.rock.move(this.rock.getX(), this.rock.getY() + 1)
            }

            this.display.draw(this)
        }
    }

    public getRock(): Rock {
        return this.rock
    }

    public getHole(): Hole {
        return this.hole
    }

    public getPlayer(): Hole {
        return this.player
    }

    isMovable(): boolean {
        let temporaryPosition = new Position(this.width, this.height)
        if (this.player.touch(temporaryPosition)) {
            return false
        }
        return true
    }




}