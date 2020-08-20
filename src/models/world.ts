import { Dimensions } from "./dimensions";
import { Cartogram } from "./Cartogram";
// import { GRASS, WATER, MOUNTAIN, NOTHING, GRAPES, BANANA, APPLES, PLUM, BLUEBERRY, SOUTH, NORTH, WATER_WITH_GRASS_SOUTH, NORTHEAST, SOUTHEAST, EAST, WEST, WATER_WITH_GRASS_NORTH, WATER_WITH_GRASS_WEST, WATER_WITH_GRASS_EAST, NORTHWEST, SOUTHWEST, GRASS_WITH_WATER_SOUTHWEST, GRASS_WITH_WATER_SOUTHEAST, GRASS_WITH_WATER_NORTHEAST, GRASS_WITH_WATER_NORTHWEST, WATER_WITH_GRASS_NORTHEAST, WATER_WITH_GRASS_SOUTHEAST, WATER_WITH_GRASS_NORTHWEST, WATER_WITH_GRASS_SOUTHWEST, GRASS_WITH_WATER_SURROUNDING, GRASS_WITH_WATER_SURROUNDING_BRIDGE_SOUTH } from "../constants";
import { pick } from "../util/rand";
import { times } from "../util/times";
import { WorldPosition } from "./position";
import { GRASS, WATER, NORTH, EAST, SOUTH, WEST, NOTHING, BANANA, GRAPES, APPLES, PLUM, BLUEBERRY, SOUTHEAST, TREES, WATER_GRASS_INTERFACE, TREE_GRASS_INTERFACE, CORN, STRAWBERRY } from "../constants";

export class World {
  terrain: Cartogram
  things: Cartogram
  prettyTerrain: Cartogram

  constructor(dims: Dimensions) {
    this.generateRawTerrain(dims)
    this.prettyTerrain = this.terrain.copy('prettyTerrain')
    this.assemblePrettyTerrain()

    // distribute things
    let thingDistribution = [
      ...times(100, NOTHING),
      ...times(1, BANANA),
      ...times(2, GRAPES),
      ...times(3, APPLES),
      ...times(1, PLUM),
      ...times(1, BLUEBERRY),
      ...times(10, CORN),
      ...times(10, STRAWBERRY),
    ]
    this.things = new Cartogram('things', dims)
    this.things.distributeValues(
      thingDistribution,
      (x,y) => 
      this.terrain.at(x,y) == GRASS &&
        this.terrain.neighbors(x,y).every(cell => cell == GRASS)
      
    )
  }

  get width() { return this.terrain.dims.width }
  get height() { return this.terrain.dims.height }

  static gen(): World {
    let world = new World({ width: 256, height: 256 })
    return world
  }

  describeTerrain(x: number, y: number): string {
    let terrain = this.terrain.at(x,y)
    if (terrain == GRASS) {
      return 'grass'
    } else if (terrain == WATER) {
      return 'water'
    } else if (terrain == TREES) {
      return 'forest'
    } else {
      return '???'
    }
  }

  describeObject(x: number, y: number) {
    let it = this.things.at(x,y)
    if (it == NOTHING || it == undefined) { return '' }
    else if (it == BANANA) { return 'banana' }
    else if (it == GRAPES) { return 'grapes' }
    else if (it == BLUEBERRY) { return 'blueberry' }
    else if (it == CORN) { return 'corn' }
    else if (it == STRAWBERRY) { return 'strawberry'}
    else if (it == APPLES) { return 'apples' }
    else if (it == PLUM) { return 'plum' }
    else { return '??? [' + it + ']'}

    // throw new Error("Method not implemented.");
  }

  chopTreeAt(x: number, y: number) {
    console.log("chop tree at target: " + x + ", " + y)
    this.terrain.set(x,y,GRASS)
    this.assemblePrettyTerrain()
    // throw new Error("Method not implemented.");
  }

  

  generateRawTerrain(dims: Dimensions) {
    let terrainDistribution = [
      ...times(18, GRASS), 
      ...times(13, WATER),
      // ...times(11, MOUNTAIN)
    ]
    this.terrain = new Cartogram('terrain', dims)
    // this.terrain.distributeValues(terrainDistribution)
    this.terrain.distributeRoughGrainedValues(terrainDistribution, 8)
    this.terrain.smooth(8)
    this.terrain.distributeWithin(GRASS, TREES, 21, 15)
  }

  prettifyInterface(indices: number[][], terrainOne: number, terrainTwo: number) {
    this.prettyTerrain.eachPosition((x, y) => {
      let self = this.terrain.at(x, y)
      let neighbors = this.terrain.labelledNeighbors(x, y)
      let east = neighbors[EAST]
      let south = neighbors[SOUTH]
      let southeast = neighbors[SOUTHEAST]
      let group = [self, east, south, southeast]

      if (group.every(val => val == terrainOne || val == terrainTwo)) {
        // let neighbors = this.terrain.labelledNeighbors(x, y) //, WATER)
        let mask =
          (this.terrain.at(x, y) == terrainOne ? 0 : 1) * 8 +
          (neighbors[EAST] == terrainOne ? 0 : 1) * 4 +
          (neighbors[SOUTH] == terrainOne ? 0 : 1) * 2 +
          (neighbors[SOUTHEAST] == terrainOne ? 0 : 1) * 1
        this.prettyTerrain.set(x, y, pick(...indices[mask]))
        // }
      }
    })
  }

  assemblePrettyTerrain() {
    // assemble pretty terrain
    // this.prettyTerrain = this.terrain.copy('prettyTerrain')

    // grass-water interface
    // let prettyIndices = WATER_GRASS_INTERFACE 
    this.prettifyInterface(WATER_GRASS_INTERFACE, WATER, GRASS)
    this.prettifyInterface(TREE_GRASS_INTERFACE, TREES, GRASS)
    // this.prettyTerrain.eachPosition((x, y) => {
    //   let self = this.terrain.at(x,y)
    //   let neighbors = this.terrain.labelledNeighbors(x, y)
    //   let east = neighbors[EAST]
    //   let south = neighbors[SOUTH]
    //   let southeast = neighbors[SOUTHEAST]
    //   let group = [self, east, south, southeast]
    //   if (group.every(val => val == WATER || val == GRASS)) {
    //     // let neighbors = this.terrain.labelledNeighbors(x, y) //, WATER)
    //     let mask =
    //       (this.terrain.at(x, y) == WATER ? 0 : 1) * 8 +
    //       (neighbors[EAST] == WATER ? 0 : 1) * 4 +
    //       (neighbors[SOUTH] == WATER ? 0 : 1) * 2 +
    //       (neighbors[SOUTHEAST] == WATER ? 0 : 1) * 1
    //     this.prettyTerrain.set(x, y, pick(...prettyIndices[mask]))
    //   // }
    //   }
    // })
  }

  // 
  isPositionClear(x: number, y: number): boolean {
    let terrain = this.terrain.at(x,y)
    let thing = this.things.at(x, y)
    let isClear = (terrain == GRASS) // || terrain == TREES)
        && (thing == NOTHING || thing == undefined)
    // console.log("---> is position (" + x + "," + y + ") clear?", isClear, terrain, thing)
    return isClear
  }

  get randomClearPosition(): WorldPosition {
    let matchingPositions: [number, number][] = []
    this.terrain.eachPosition((x, y) => {
      if (this.isPositionClear(x,y)) {
        matchingPositions.push([x,y])
      }
    })
    return pick(...matchingPositions) as WorldPosition
  }
}
