var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Point } from "./Point.js";
import { Api } from "./Api.js";
import { Wall } from "./Wall.js";
import { Plate } from "./Plate.js";
export class Level {
    static get(level) {
        return __awaiter(this, void 0, void 0, function* () {
            const levels = yield Api.getData("levels");
            return new Level(levels.values[level]);
        });
    }
    constructor(data) {
        this.objects = [];
        this.playersStart = [];
        this.size = [];
        if (data.size) {
            this.size.push(data.size[0], data.size[1]);
        }
        if (data.walls) {
            for (let i = 0; i < data.walls.length; i++) {
                this.objects.push(new Wall(data.walls[i][0], data.walls[i][1]));
            }
        }
        if (data.endPlates) {
            for (let i = 0; i < data.endPlates.length; i++) {
                this.objects.push(new Plate(data.endPlates[i][0], data.endPlates[i][1]));
            }
        }
        if (data.playersStart) {
            for (let i = 0; i < data.playersStart.length; i++) {
                this.playersStart.push(new Point(data.playersStart[i][0], data.playersStart[i][1]));
            }
        }
        if (data.size) {
            for (let i = 0; i <= this.size[0]; i++) {
                this.objects.push(new Wall(i, 0));
            }
            for (let y = 0; y <= this.size[1]; y++) {
                this.objects.push(new Wall(0, y));
            }
            for (let j = 0; j <= this.size[1]; j++) {
                this.objects.push(new Wall(this.size[0], j));
            }
            for (let j = 0; j < this.size[0]; j++) {
                this.objects.push(new Wall(j, this.size[1]));
            }
        }
    }
    getObjects() {
        return this.objects;
    }
    getPlayersStart() {
        return this.playersStart;
    }
    getSize() {
        return this.size;
    }
}
