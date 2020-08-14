import { Dimensions } from "./dimensions";
import { Cartogram } from "./Cartogram";

export class World {
  map: Cartogram

  constructor(options: Dimensions) {
    let distribution = [0, 0, 0, 1, 1, 2] // 0, 0, 0, 1, 1, 2, 2, 2]
    this.map = new Cartogram(options, distribution)
  }

  smooth(times: number) { this.map.smooth(times) }

  get width() { return this.map.dims.width }
  get height() { return this.map.dims.height }

  static gen(): World {
    let world = new World({ width: 40, height: 40 })
    world.smooth(4)
    return world
  }
}
