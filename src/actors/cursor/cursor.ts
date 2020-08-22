import { Actor, Vector, Color } from "excalibur";
import { Resources, SpriteSheets } from "../../resources";
import { OVERWORLD_CELL_SIZE, GRASS } from "../../constants";
import { Game } from "../../Game";

class PluckedStructure extends Actor {
  constructor() {
    super({
      width: OVERWORLD_CELL_SIZE,
      height: OVERWORLD_CELL_SIZE,
      // color: Color.Black,
      // opacity: 0.3,
    })
  }

  onInitialize() {
    // this.addDrawing(Resources.Sword)
    // this.anchor = new Vector(0,0) //16,16)
    this.anchor = new Vector(0.5,0.5)
    this.addDrawing(SpriteSheets.Structure.getSprite(5))
  }


}

export class Cursor extends Actor {
  hoverWorldPos: [number, number] = [-1,-1]
  pluckedStructure: PluckedStructure

  constructor() {
    super({
      width: OVERWORLD_CELL_SIZE,
      height: OVERWORLD_CELL_SIZE,
      color: Color.Black,
      opacity: 0.3,
    })
  }

  onInitialize() {
    // this.addDrawing(Resources.Sword)
    // this.anchor = new Vector(0,0) //16,16)

    this.anchor = new Vector(0.5,0.5)
    // this.addDrawing(SpriteSheets.Structure.getSprite(5))
    this.pluckedStructure = new PluckedStructure
    this.add(this.pluckedStructure)
  }

  ticks = 0
  onPreUpdate(engine: Game) {
    this.ticks ++
    // if (this.ticks % 3 === 0) {
      if (engine.input.pointers.primary.lastWorldPos) {
        let { x, y } = engine.input.pointers.primary.lastWorldPos
        this.hoverWorldPos = [
          Math.round(x / OVERWORLD_CELL_SIZE),
          Math.round(y / OVERWORLD_CELL_SIZE),
        ]

        let [cellX, cellY] = this.hoverWorldPos
        this.pos = new Vector(
          cellX * OVERWORLD_CELL_SIZE,
          cellY * OVERWORLD_CELL_SIZE
        )

        let terrain = engine.world.describeTerrain(cellX, cellY)
        let item = engine.world.describeObject(cellX, cellY)
        engine.hud.setHoverMessage([item, terrain].join(' -- '))

        if (engine.world.terrain.at(cellX, cellY) == GRASS) {
          this.color = Color.Black
        } else {
          this.color = Color.Red
        }
      }
    // }
  }
} 