import { Display } from "./Display.js"
import { Hole } from "./Hole.js"
import { Player } from "./Player.js"
import { Position } from "./Position.js"
import { Rock } from "./Rock.js"
import { Direction } from "./direction.js"

export class Game {
    protected player: Player
    protected rocks: Array<Rock> = []
    protected holes: Array<Hole> = []
    protected width: number
    protected height: number
    protected direction: Direction = Direction.DOWN
    protected display: Display
    protected difficulty: number
    protected levels: Array<number> = [2,4,6];
    protected selectedLevel = 0;
    protected solvedHoles: number = 0;

    constructor(width: number, height: number) {
        this.player = new Player(13, 15)
        this.difficulty = this.levels[this.selectedLevel]
        this.width = width
        this.height = height
        this.display = new Display(width, height)
    }

    public run() {
        for (let i = 0; i < this.difficulty; i++) {
            let tempRock = new Rock(10, 16)
            this.setRandomPosition(tempRock, 2)
            this.rocks.push(tempRock)
        }

        this.setRandomPosition(this.player, 0)
        for (let i = 0; i < this.difficulty; i++) {
            let tempHole = new Hole(10, 16)
            this.setRandomPosition(tempHole, 2)
            this.holes.push(tempHole)
        }

        if (this.isMovable() == true) {
            this.handleEvents()
        }
        this.display.draw(this)
    }

    public getRandomPosition(padding: number) {
        let isUsed: boolean = true
        let x: number = 0
        let y: number = 0

        while (isUsed) {
            x = Math.floor(Math.random() * this.width - padding);
            y = Math.floor(Math.random() * this.height - padding);
            let tempPosition = new Position(x, y)

            if (x === 0) {
                x = x + padding
            }
            if (y === this.height) {
                y = y - padding
            }
            if (y === 0) {
                y = y + padding
            }
            if (x === this.width) {
                x = x - padding
            }

            isUsed = this.player.touch(tempPosition)

            if (!isUsed) {
                for (let i = 0; i < this.rocks.length; i++) {
                    if (this.rocks[i].touch(tempPosition)) {
                        isUsed = true
                    }
                }

                for (let i = 0; i < this.holes.length; i++) {
                    if (this.holes[i].touch(tempPosition)) {
                        isUsed = true
                    }
                }
            }
        }

        return [x, y]
    }

    public setRandomPosition(pos: Position, pad: number) {
        let newPos: number[] = this.getRandomPosition(pad)
        pos.setPosition(newPos[0], newPos[1])
    }

    handleEvents() {
        document.onkeydown = (e) => {
            let deltaX = 0
            let deltaY = 0

            let isWalkable = true

            const oldPosition = new Position(this.player.getX() + deltaX, this.player.getY() + deltaY)
            switch (e.keyCode) {
                case 37:
                    if (this.player.getX() !== 0) {
                        deltaX = - 1
                    }
                    break;
                case 38:
                    if (this.player.getY() !== 0) {
                        deltaY = - 1
                    }
                    break;
                case 39:
                    if ((this.player.getX() !== this.width - 1)) {
                        deltaX = + 1
                    }
                    break;
                case 40:
                    if ((this.player.getY() !== this.height - 1)) {
                        deltaY = + 1
                    }
                    break;
            }


            this.player.move(this.player.getX() + deltaX, this.player.getY() + deltaY)

            for (let i = 0; i < this.difficulty; i++) {
                if (this.player.touch(this.holes[i])) {
                    isWalkable = this.holes[i].getIsWalkable()
                }
            }

            if (!isWalkable) {
                this.player.move(oldPosition.getX(), oldPosition.getY())
            }
            // if (this.player.touch(this.hole) && isWalkable == false) {
            //    
            // }

            let indexRock: number | null = null

            for (let i = 0; i < this.difficulty; i++) {
                if (this.player.touch(this.rocks[i]) && this.rocks[i].getIsMovable()) {
                    indexRock = i
                }
            }

            if (indexRock !== null && this.rocks[indexRock].getX() !== 0 && this.rocks[indexRock].getY() !== 0 && this.player.getX() !== this.width - 1 && this.player.getY() !== this.height - 1) {
                this.rocks[indexRock].move(this.rocks[indexRock].getX() + deltaX, this.rocks[indexRock].getY() + deltaY)

                for (let i = 0; i < this.difficulty; i++) {
                    if (this.rocks[indexRock].touch(this.holes[i]) && this.holes[i].getIsWalkable() == false) {
                        this.rocks[indexRock].blockRock()
                        this.holes[i].allowIsWalkable()
                        this.solvedHoles++

                        if (this.solvedHoles == this.difficulty) {
                            this.nextLevel()
                        }
                    }
                }
            }


            this.display.draw(this)
        }
    }


    public nextLevel() {
        if (this.selectedLevel == this.levels.length - 1) {
            alert('Vous avez gagné')
        } else {
            this.solvedHoles = 0
            this.selectedLevel++
            this.rocks = []
            this.holes = []
            this.difficulty = this.levels[this.selectedLevel]
            this.run()
        }

    }
    public getRock(): Array<Rock> {
        return this.rocks
    }

    public getHole(): Array<Hole> {
        return this.holes
    }

    public getPlayer(): Player {
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
