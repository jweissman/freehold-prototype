import { Actor, Vector, Color } from "excalibur";
import { OVERWORLD_CELL_SIZE, PROGRESS_ANIM_LENGTH, PROGRESS_INTERVAL } from "../constants";
import { SpriteSheets } from "../resources";
import { Game } from "../Game";

export class ProgressBar extends Actor {
  constructor() {
    super({
      // pos: new Vector(0,0),
      width: OVERWORLD_CELL_SIZE, //* 2,
      height: OVERWORLD_CELL_SIZE, // * 2,
      color: new Color(255, 255, 255),
      anchor: new Vector(0.5,0.5)
    })
  }

  onInitialize(engine: Game) {
    this.addDrawing('progress', SpriteSheets.Progress.getAnimationForAll(
      engine,
      (PROGRESS_INTERVAL / PROGRESS_ANIM_LENGTH) + 15 // milliseconds per frame...
    ))
    this.setDrawing('progress')
    // this.visible = false
  }
}