import { Apple } from "./apple.js";
import { Direction } from "./direction.js";
import { Display } from "./display.js";
import { Snake } from "./snake.js";

export class Game {
    protected isFinish: boolean = false
    protected directions: Direction[] = [Direction.RIGHT]
    protected height: number
    protected display: Display
    protected width: number
    protected snake: Snake
    protected apple: Apple
    private speed: number
    protected score: HTMLElement
    protected Loose: boolean = false

    constructor(width: number, height: number, scale: number, speed: number) {
        this.height = height
        this.width = width
        this.speed = speed
        this.apple = new Apple(20, 10)
        this.snake = new Snake(10, 10)
        this.display = new Display(width, height, scale)
        this.score = document.createElement('span')
    }

    getApple(): Apple {
        return this.apple
    }

    getSnake(): Snake {
        return this.snake
    }

    resetApple() {
        let x: number = 0
        let y: number = 0;
        let isTouch: boolean = true
        while (isTouch == true) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            if (this.snake.touch(x, y) == true) {
                isTouch = true
            } else {
                isTouch = false
            }
        }
        this.apple.setApple(x, y)
    }


    test() {
        this.display.draw(this)
    }
    play() {
        let lastChrono: number = 0;
        const loop = (chrono: number) => {
            if (lastChrono === 0) lastChrono = chrono;
            if (chrono - lastChrono >= this.speed) {
                this.gameplayLoop()
                this.handleEvents()



                lastChrono = chrono;
                // Logique...
            };
            if (true)
                requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }

    // move() {
    //     while (this.isFinish == false) {
    //         this

    //     }
    // }

    gameplayLoop() {
        let point: number = 0
        if (!this.hasLoose()) {
            this.display.draw(this)
            if (this.directions.length > 1)
                this.directions.shift()
            let newDir = this.directions[0]
            this.snake.growHead(newDir)
            if (this.snake.touch(this.apple.getX(), this.apple.getY()) == false) {
                this.snake.cropTail()
            } else {
                point = point + 1
                this.resetApple()
                console.log(this.score)
            }
        } else {
            this.resetApple()
        }


    }

    handleEvents() {
        document.onkeydown = (e) => {
            let lastDirection = this.directions[this.directions.length - 1]
            switch (e.keyCode) {
                case 37:
                    if (lastDirection == Direction.DOWN || lastDirection == Direction.UP) this.directions.push(Direction.LEFT)
                    break;
                case 38:
                    if (lastDirection == Direction.LEFT || lastDirection == Direction.RIGHT) this.directions.push(Direction.UP);
                    break;
                case 39:
                    if (lastDirection == Direction.DOWN || lastDirection == Direction.UP) this.directions.push(Direction.RIGHT);
                    break;
                case 40:
                    if (lastDirection == Direction.LEFT || lastDirection == Direction.RIGHT) this.directions.push(Direction.DOWN);
                    break;
            }
        }
    }
    getDirection() {
        return this.directions[0]
    }

    getScore() {
        return this.score
    }

    hasLoose(): boolean {
        const head = this.snake.getBody()[0];
        if (this.snake.touch(head.getX(), head.getY())) {
            return true
        }
        if (head.getX() < 0 || head.getY() < 0 || head.getX() >= this.width || head.getY() >= this.height) {
            return true;
        }
        return false
        //head.getX() < 0 ||head.getY() < 0 || head.getX() > this.width ||head.getY() > this.height
    }

  
}