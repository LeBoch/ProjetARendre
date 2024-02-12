"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
class Level {
    constructor(LEVELS, objects, playersStart, size) {
        this.LEVELS = LEVELS;
        this.objects = objects;
        this.playersStart = playersStart;
        this.size = size;
    }
    getLevel(level) {
        return this.LEVELS[level];
    }
}
exports.Level = Level;
