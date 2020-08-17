import { Actor, Vector, Color } from "excalibur";
import { Resources } from "../../resources";
import { OVERWORLD_CELL_SIZE } from "../../constants";
import { Game } from "../..";

export class Cursor extends Actor {
  constructor() {
    super({
      width: OVERWORLD_CELL_SIZE,
      height: OVERWORLD_CELL_SIZE,
      color: Color.Black,
      opacity: 0.1,
    })
  }

  onInitialize() {
    // this.addDrawing(Resources.Sword)
    // this.anchor = new Vector(0,0) //16,16)

    this.anchor = new Vector(0.5,0.5)
  }

  onPreUpdate(engine: Game) {
    if (engine.input.pointers.primary.lastWorldPos) {
      let { x, y } = engine.input.pointers.primary.lastWorldPos
      let [nearestCellX, nearestCellY] = [
        Math.round(x / OVERWORLD_CELL_SIZE),
        Math.round(y / OVERWORLD_CELL_SIZE),
      ] 
      this.pos = new Vector(
        nearestCellX * OVERWORLD_CELL_SIZE,
        nearestCellY * OVERWORLD_CELL_SIZE
      )
    }
  }
} 