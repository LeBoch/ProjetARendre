var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Player } from "./Player.js";
import { Display } from "./Display.js";
import { Direction } from "./Direction.js";
import { Level } from "./Level.js";
import { Wall } from "./Wall.js";
import { Plate } from "./Plate.js";
import { Api } from "./Api.js";
export class Game {
    constructor(level = 1) {
        this.isOver = false;
        this.level = 1;
        this.objects = [];
        this.players = [];
        this.size = [];
        this.level = level;
        let toto = [];
        let Player1;
        Player1 = this.getPlayerApi('a_player2').then(data => Player1 = (new Player(data.x, data.y, data._id, data._rev, data.color, data.assigned)));
        console.log(Player1);
        this.getPlayerApi('a_player1').then(data => toto.push(new Player(data.x, data.y, data._id, data._rev, data.color, data.assigned)));
        this.players = toto;
        console.log(this.players);
        console.log(toto.length);
        console.log(this.players.length);
        let tata = [];
        for (let i = 0; i < 2; i++) {
            tata.push('toto');
        }
        console.log(tata);
        console.log(this.player);
        if (this.player) {
            this.player.assign();
        }
        this.display = new Display();
    }
    getPlayerApi(id) {
        return Api.getData(id);
    }
    getObjects() {
        return this.objects;
    }
    getPlayer() {
        return this.player;
    }
    getPlayers() {
        return this.players;
    }
    createLvl() {
        return __awaiter(this, void 0, void 0, function* () {
            let level = yield Level.get(this.level);
            this.objects = level.getObjects();
            this.size = level.getSize();
            this.display.draw(this);
            let starts = level.getPlayersStart();
        });
    }
    moveObject(ob, dir) {
        const oldPosition = [ob.getX(), ob.getY()];
        if (dir == Direction.BAS) {
            ob.move(ob.getX(), ob.getY() + 1);
        }
        if (dir == Direction.HAUT) {
            ob.move(ob.getX(), ob.getY() - 1);
        }
        if (dir == Direction.DROITE) {
            ob.move(ob.getX() + 1, ob.getY());
        }
        if (dir == Direction.GAUCHE) {
            ob.move(ob.getX() - 1, ob.getY());
        }
        // Pour passer let SetActive a true 
        for (let i = 0; i < this.objects.length; i++) {
            if (this.objects[i] instanceof Plate && this.objects[i].touch(ob)) {
                this.objects[i].setActive();
            }
            if (this.objects[i] instanceof Plate && !this.objects[i].touch(ob)) {
                this.objects[i].falseActive();
            }
            // Pour bloquer les mouvements sur les murs et Walls 
            if (this.objects[i] instanceof Wall && this.objects[i].touch(ob) || this.players[i] instanceof Player && this.players[i].touch(ob)) {
                ob.move(oldPosition[0], oldPosition[1]);
            }
        }
    }
    handleEvent() {
        document.onkeydown = (e) => {
            if (this.player != undefined) {
                switch (e.keyCode) {
                    case 37:
                        console.log('toto');
                        this.moveObject(this.player, Direction.GAUCHE);
                        break;
                    case 39:
                        this.moveObject(this.player, Direction.DROITE);
                        break;
                    case 38:
                        this.moveObject(this.player, Direction.HAUT);
                        break;
                    case 40:
                        this.moveObject(this.player, Direction.BAS);
                        break;
                }
            }
        };
    }
    play() {
        this.createLvl();
        this.display.draw(this);
        this.handleEvent();
    }
    getSize() {
        return this.size;
    }
    getLevel() {
        return this.level;
    }
}
