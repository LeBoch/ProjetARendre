"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Display_js_1 = require("./Display.js");
const Drawer_js_1 = require("./Drawer.js");
class Game {
    constructor(level, objects, players, x, y) {
        this.isOver = false;
        this.level = level;
        // this.player = player;
        this.display = new Display_js_1.Display(new Drawer_js_1.Drawer(1, 1, 1));
        this.objects = objects;
        this.players = players;
    }
    getObjects() {
        return this.objects;
    }
    getPlayers() {
        return this.players;
    }
}
exports.Game = Game;
