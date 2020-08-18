import { Dimensions } from "./dimensions";
import { Cartogram } from "./Cartogram";
// import { GRASS, WATER, MOUNTAIN, NOTHING, GRAPES, BANANA, APPLES, PLUM, BLUEBERRY, SOUTH, NORTH, WATER_WITH_GRASS_SOUTH, NORTHEAST, SOUTHEAST, EAST, WEST, WATER_WITH_GRASS_NORTH, WATER_WITH_GRASS_WEST, WATER_WITH_GRASS_EAST, NORTHWEST, SOUTHWEST, GRASS_WITH_WATER_SOUTHWEST, GRASS_WITH_WATER_SOUTHEAST, GRASS_WITH_WATER_NORTHEAST, GRASS_WITH_WATER_NORTHWEST, WATER_WITH_GRASS_NORTHEAST, WATER_WITH_GRASS_SOUTHEAST, WATER_WITH_GRASS_NORTHWEST, WATER_WITH_GRASS_SOUTHWEST, GRASS_WITH_WATER_SURROUNDING, GRASS_WITH_WATER_SURROUNDING_BRIDGE_SOUTH } from "../constants";
import { pick } from "../util/rand";
import { times } from "../util/times";
import { WorldPosition } from "./position";
import { GRASS, WATER, NORTH, EAST, SOUTH, WEST, NOTHING, BANANA, GRAPES, APPLES, PLUM, BLUEBERRY } from "../constants";

export class World {
  terrain: Cartogram
  things: Cartogram
  prettyTerrain: Cartogram

  generateRawTerrain(dims: Dimensions) {
    let terrainDistribution = [
      ...times(18, GRASS), 
      ...times(13, WATER),
      // ...times(11, MOUNTAIN)
    ]
    this.terrain = new Cartogram('terrain', dims)
    // this.terrain.distributeValues(terrainDistribution)
    this.terrain.distributeRoughGrainedValues(terrainDistribution)
    this.terrain.smooth(8)
  }

  assemblePrettyTerrain() {
    // assemble pretty terrain
    this.prettyTerrain = this.terrain.copy('prettyTerrain')
    this.prettyTerrain.eachPosition((x, y) => {
      let neighbors = this.terrain.labelledNeighbors(x, y, GRASS)
      if (this.terrain.at(x, y) == GRASS) {
        let mask =
          (neighbors[NORTH] == WATER ? 0 : 1) +
          (neighbors[EAST] == WATER ? 0 : 1) * 2 +
          (neighbors[SOUTH] == WATER ? 0 : 1) * 4 +
          (neighbors[WEST] == WATER ? 0 : 1) * 8
        this.prettyTerrain.set(x, y, mask)
      }
    })
  }

  constructor(dims: Dimensions) {
    this.generateRawTerrain(dims)
    this.prettyTerrain = this.terrain.copy('prettyTerrain')
    this.assemblePrettyTerrain()

    // distribute things
    let thingDistribution = [
      ...times(2000, NOTHING),
      ...times(1, BANANA),
      ...times(2, GRAPES),
      ...times(3, APPLES),
      ...times(1, PLUM),
      ...times(1, BLUEBERRY),
    ]
    this.things = new Cartogram('things', dims)
    this.things.distributeValues(
      thingDistribution,
      (x,y) => this.terrain.at(x,y) == GRASS
    )
  }

  get width() { return this.terrain.dims.width }
  get height() { return this.terrain.dims.height }

  static gen(): World {
    let world = new World({ width: 200, height: 200 })
    return world
  }

  isPositionClear(x: number, y: number): boolean {
    return this.terrain.at(x, y) == GRASS && this.things.at(x, y) == NOTHING
  }

  get randomClearPosition(): WorldPosition {
    let matchingPositions: [number,number][] = []
    this.terrain.eachPosition((x,y) => {
      if (this.isPositionClear(x,y)) {
        matchingPositions.push([x,y])
      }
    })
    return pick(...matchingPositions) as WorldPosition
  }
}
