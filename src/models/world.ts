import { Dimensions } from "./dimensions";
import { Cartogram } from "./Cartogram";
// import { GRASS, WATER, MOUNTAIN, NOTHING, GRAPES, BANANA, APPLES, PLUM, BLUEBERRY, SOUTH, NORTH, WATER_WITH_GRASS_SOUTH, NORTHEAST, SOUTHEAST, EAST, WEST, WATER_WITH_GRASS_NORTH, WATER_WITH_GRASS_WEST, WATER_WITH_GRASS_EAST, NORTHWEST, SOUTHWEST, GRASS_WITH_WATER_SOUTHWEST, GRASS_WITH_WATER_SOUTHEAST, GRASS_WITH_WATER_NORTHEAST, GRASS_WITH_WATER_NORTHWEST, WATER_WITH_GRASS_NORTHEAST, WATER_WITH_GRASS_SOUTHEAST, WATER_WITH_GRASS_NORTHWEST, WATER_WITH_GRASS_SOUTHWEST, GRASS_WITH_WATER_SURROUNDING, GRASS_WITH_WATER_SURROUNDING_BRIDGE_SOUTH } from "../constants";
import { pick } from "../util/rand";
import { times } from "../util/times";
import { WorldPosition } from "./position";
import { GRASS, WATER, NORTH, EAST, SOUTH, WEST, NOTHING, BANANA, GRAPES, APPLES, PLUM, BLUEBERRY, SOUTHEAST, TREES, WATER_GRASS_INTERFACE, TREE_GRASS_INTERFACE, CORN, STRAWBERRY, WOODEN_WALL, WOODEN_WALL_CONNECTIONS } from "../constants";

export class World {
  terrain: Cartogram
  things: Cartogram
  structure: Cartogram

  prettyTerrain: Cartogram
  prettyStructure: Cartogram

  constructor(dims: Dimensions) {
    this.generateRawTerrain(dims)
    this.prettyTerrain = new Cartogram('prettyTerrain', dims) //this.terrain.copy('prettyTerrain')
    this.assemblePrettyTerrain()

    // distribute things
    let thingDistribution = [
      ...times(10, NOTHING),
      ...times(1, BANANA),
      ...times(2, GRAPES),
      ...times(3, APPLES),
      ...times(1, PLUM),
      ...times(1, BLUEBERRY),
      ...times(2, CORN),
      ...times(3, STRAWBERRY),
    ]
    this.things = new Cartogram('things', dims)
    this.things.distributeValues(
      thingDistribution,
      (x,y) => 
      this.terrain.at(x,y) == GRASS &&
        this.terrain.neighbors(x,y).every(cell => cell == GRASS)
    )

    this.structure = new Cartogram('structure', dims)
    this.prettyStructure = new Cartogram('prettyStructure', dims)
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
  }

  chopTreeAt(x: number, y: number) {
    console.log("chop tree at target: " + x + ", " + y)
    this.terrain.set(x,y,GRASS)
    // this.assemblePrettyTerrain()
    this.beautifyTerrainInterfaces(TREE_GRASS_INTERFACE, TREES, GRASS)
    // throw new Error("Method not implemented.");
  }

  buildWoodenWall(x: number, y: number) {
    console.log("build wall at " + x + ", " + y)
    this.structure.set(x,y,WOODEN_WALL)
    this.beautifyStructureInterfaces(WOODEN_WALL_CONNECTIONS, WOODEN_WALL)
    // this.prettify
    // this.assemblePrett
    // this.structure
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

  beautifyTerrainInterfaces(indices: number[][], terrainOne: number, terrainTwo: number) {
    this.prettyTerrain.eachPosition((x, y) => {
      let self = this.terrain.at(x, y)
      let neighbors = this.terrain.labelledNeighbors(x, y)
      let east = neighbors[EAST]
      let south = neighbors[SOUTH]
      let southeast = neighbors[SOUTHEAST]
      let group = [self, east, south, southeast]

      if (group.every(val => val == terrainOne || val == terrainTwo)) {
        let mask =
          (this.terrain.at(x, y) == terrainOne ? 0 : 1) * 8 +
          (neighbors[EAST] == terrainOne ? 0 : 1) * 4 +
          (neighbors[SOUTH] == terrainOne ? 0 : 1) * 2 +
          (neighbors[SOUTHEAST] == terrainOne ? 0 : 1) * 1
        this.prettyTerrain.set(x, y, pick(...indices[mask]))
      }
    })
  }

  assemblePrettyTerrain() {
    this.beautifyTerrainInterfaces(WATER_GRASS_INTERFACE, WATER, GRASS)
    this.beautifyTerrainInterfaces(TREE_GRASS_INTERFACE, TREES, GRASS)
  }

  beautifyStructureInterfaces(indices: number[], structure: number) {
    this.prettyStructure.eachPosition((x,y) => {
      let self = this.structure.at(x,y)
      if (self == structure) {
        // console.log("beautify structure " + structure + " at " + x + ", " + y)
        let neighbors = this.structure.labelledNeighbors(x,y)
        let north = neighbors[NORTH]
        let south = neighbors[SOUTH]
        let east = neighbors[EAST]
        let west = neighbors[WEST]

        let mask = (north == structure ? 1 : 0) * 8 +
                   (east == structure ? 1 : 0) * 4 +
                   (south == structure ? 1 : 0) * 2 +
                   (west == structure ? 1 : 0) * 1
        // console.log("connections", { north, south, east, west}, "--->", mask)
        this.prettyStructure.set(x,y,indices[mask])
      }
    })
  }


  // 
  isPositionClear(x: number, y: number): boolean {
    let terrain = this.terrain.at(x,y)
    let thing = this.things.at(x, y)
    let building = this.structure.at(x,y)
    let isClear = (terrain == GRASS) // || terrain == TREES)
        // && (thing == NOTHING || thing == undefined)
        && (building == NOTHING || building == undefined)

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
