import { Actor, Vector } from "excalibur";
import { Resources } from "../../resources";

export class Cursor extends Actor {
  constructor() {
    super({
      width: 25, height: 25,
    })
  }

  onInitialize() {
    this.addDrawing(Resources.Sword)
    this.anchor = new Vector(1,0)
  }

  onPreUpdate(engine: ex.Engine) {
    if (engine.input.pointers.primary.lastWorldPos) {
      this.pos = engine.input.pointers.primary.lastWorldPos
    }
  }
} 