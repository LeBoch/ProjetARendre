import { Point } from "./Point.js";
import { Api } from "./Api.js";

type LevelData = {
  size: [number, number];
  walls: [number, number][];
  endPlates: [number, number][];
  playersStart: [number, number][];
}

import { Wall } from "./Wall.js";
import { Plate } from "./Plate.js";
import { Player } from "./Player.js";
export class Level {

  protected objects: Point[] = [];
  protected playersStart: Point[] = [];
  protected size: number[] = [];

  static async get(level: number) {
    const levels = await Api.getData("levels")
    return new Level(levels.values[level])
  }

  private constructor(data: LevelData) {

    if (data.size) {
      this.size.push(data.size[0], data.size[1])
    }

    if (data.walls) {
      for (let i = 0; i < data.walls.length; i++) {
        this.objects.push(new Wall(data.walls[i][0], data.walls[i][1]))
      }
    }
    if (data.endPlates) {
      for (let i = 0; i < data.endPlates.length; i++) {
        this.objects.push(new Plate(data.endPlates[i][0], data.endPlates[i][1]))
      }
    }
    if (data.playersStart) {
      for (let i = 0; i < data.playersStart.length; i++) {
        this.playersStart.push(new Point(data.playersStart[i][0], data.playersStart[i][1]))
      }
    }

    if (data.size) {

      for (let i = 0; i <= this.size[0]; i++) {
        this.objects.push(new Wall(i, 0))
      }
      for (let y = 0; y <= this.size[1]; y++) {
        this.objects.push(new Wall(0, y))
      }
      for (let j = 0; j <= this.size[1]; j++) {
        this.objects.push(new Wall(this.size[0], j))
      }
      for (let j = 0; j < this.size[0]; j++) {
        this.objects.push(new Wall(j, this.size[1]))
      }
    }

  }

  getObjects(): Point[] {
    return this.objects
  }

  getPlayersStart(): Point[] {
    return this.playersStart
  }

  getSize(): number[] {
    return this.size
  }

}