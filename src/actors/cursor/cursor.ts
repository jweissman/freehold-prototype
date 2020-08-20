import { Actor, Vector, Color } from "excalibur";
import { Resources } from "../../resources";
import { OVERWORLD_CELL_SIZE } from "../../constants";
import { Game } from "../../Game";

export class Cursor extends Actor {
  hover: [number, number] = [-1,-1]

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

  ticks = 0
  onPreUpdate(engine: Game) {
    this.ticks ++
    if (this.ticks % 3 === 0) {
      if (engine.input.pointers.primary.lastWorldPos) {
        let { x, y } = engine.input.pointers.primary.lastWorldPos
        this.hover = [
          Math.round(x / OVERWORLD_CELL_SIZE),
          Math.round(y / OVERWORLD_CELL_SIZE),
        ]

        let [cellX, cellY] = this.hover
        this.pos = new Vector(
          cellX * OVERWORLD_CELL_SIZE,
          cellY * OVERWORLD_CELL_SIZE
        )

        let terrain = engine.world.describeTerrain(cellX, cellY)
        let item = engine.world.describeObject(cellX, cellY)
        engine.hud.setHoverMessage([item, terrain].join(' -- '))
      }
    }
  }
} 