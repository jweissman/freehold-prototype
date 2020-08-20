import { Actor, Vector, Color } from "excalibur";
import { OVERWORLD_CELL_SIZE } from "../constants";
import { SpriteSheets } from "../resources";
import { Game } from "../Game";

export class ProgressBar extends Actor {
  constructor() {
    super({
      // pos: new Vector(0,0),
      width: OVERWORLD_CELL_SIZE, //* 2,
      height: OVERWORLD_CELL_SIZE, // * 2,
      color: new Color(255, 255, 255)
    })
  }

  onInitialize(engine: Game) {
    this.addDrawing('progress', SpriteSheets.Progress.getAnimationForAll(engine, 25))
    this.setDrawing('progress')
    // this.visible = false
  }
}