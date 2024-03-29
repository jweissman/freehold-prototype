import { Dimensions } from "./dimensions";
import { Cartogram } from "./Cartogram";
// import { GRASS, WATER, MOUNTAIN, NOTHING, GRAPES, BANANA, APPLES, PLUM, BLUEBERRY, SOUTH, NORTH, WATER_WITH_GRASS_SOUTH, NORTHEAST, SOUTHEAST, EAST, WEST, WATER_WITH_GRASS_NORTH, WATER_WITH_GRASS_WEST, WATER_WITH_GRASS_EAST, NORTHWEST, SOUTHWEST, GRASS_WITH_WATER_SOUTHWEST, GRASS_WITH_WATER_SOUTHEAST, GRASS_WITH_WATER_NORTHEAST, GRASS_WITH_WATER_NORTHWEST, WATER_WITH_GRASS_NORTHEAST, WATER_WITH_GRASS_SOUTHEAST, WATER_WITH_GRASS_NORTHWEST, WATER_WITH_GRASS_SOUTHWEST, GRASS_WITH_WATER_SURROUNDING, GRASS_WITH_WATER_SURROUNDING_BRIDGE_SOUTH } from "../constants";
import { pick } from "../util/rand";
import { times } from "../util/times";
import { WorldPosition } from "./position";
import { GRASS, WATER, NORTH, EAST, SOUTH, WEST, NOTHING, BANANA, GRAPES, APPLES, PLUM, BLUEBERRY, SOUTHEAST, TREES, WATER_GRASS_INTERFACE, TREE_GRASS_INTERFACE, CORN, STRAWBERRY, WOODEN_WALL, WOODEN_WALL_CONNECTIONS, WOODEN_FLOOR, WOODEN_DOOR_CLOSED, WOODEN_DOOR_OPEN, WOODEN_DOOR_OPEN_CONNECTIONS, WOODEN_DOOR_CLOSED_CONNECTIONS } from "../constants";

export class World {
  terrain: Cartogram
  things: Cartogram
  floors: Cartogram
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

    this.floors = new Cartogram('floors', dims)
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

  beautifyWoodenStructures() {
    let woodIndex = {
        [WOODEN_WALL]: WOODEN_WALL_CONNECTIONS,
        [WOODEN_DOOR_OPEN]: WOODEN_DOOR_OPEN_CONNECTIONS,
        [WOODEN_DOOR_CLOSED]: WOODEN_DOOR_CLOSED_CONNECTIONS,
      }
    let connectingWoodStructures = [ WOODEN_WALL, WOODEN_DOOR_OPEN, WOODEN_DOOR_CLOSED ]
    this.beautifyStructureInterfaces(woodIndex, connectingWoodStructures)
  }

  structureDescriptions = {
    [WOODEN_WALL]: 'Wooden Wall',
    [WOODEN_DOOR_OPEN]: 'Wooden Door (Open)',
    [WOODEN_DOOR_CLOSED]: 'Wooden Door (Closed)',
    [WOODEN_FLOOR]: 'Wooden Floor'
  }
  build(x: number, y: number, structureId: number) {
    console.log("build structure with id " + structureId)
    console.log("build " + this.structureDescriptions[structureId] + " at " + x + ", " + y)
    // this.structure.set(x,y,structureId)
    
    if (structureId == WOODEN_WALL) {
      this.structure.set(x, y, WOODEN_WALL)
      this.beautifyWoodenStructures()
    } else if (structureId == WOODEN_DOOR_CLOSED) {
      this.structure.set(x, y, WOODEN_DOOR_CLOSED)
      // this.beautifyStructureInterfaces(woodIndex, connectingWoodStructures)
      this.beautifyWoodenStructures()
    } else if (structureId == WOODEN_FLOOR) {
      // need to actually modify terrain...?
      // or maybe a 'floor' level terrain to ensure layering
        console.warn('would build floor...')
      if (this.terrain.at(x+1,y) == GRASS && this.terrain.at(x,y+1) == GRASS && this.terrain.at(x+1,y+1) == GRASS) {
        this.floors.set(x, y, WOODEN_FLOOR)
      }
      // }
    }
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

  beautifyStructureInterfaces(indices: { [key: number]: number[] }, structures: number[]) {
    this.prettyStructure.eachPosition((x,y) => {
      let self = this.structure.at(x,y)
      if (structures.includes(self)) { //self == structure) {
        // console.log("beautify structure " + structure + " at " + x + ", " + y)
        let neighbors = this.structure.labelledNeighbors(x,y)
        let north = neighbors[NORTH]
        let south = neighbors[SOUTH]
        let east = neighbors[EAST]
        let west = neighbors[WEST]

        let mask = (structures.includes(north) ? 1 : 0) * 8 +
                   (structures.includes(east) ? 1 : 0) * 4 +
                   (structures.includes(south) ? 1 : 0) * 2 +
                   (structures.includes(west) ? 1 : 0) * 1
        // console.log("connections", { north, south, east, west}, "--->", mask)
        this.prettyStructure.set(x,y,indices[self][mask])
        if (indices[self][mask] === -1) {
          console.log("remove structure at " + x + ", " + y)
          this.structure.set(x,y,-1)
        }
      }
    })
  }

  isTerrainClear(x: number, y: number): boolean {
    let terrain = this.terrain.at(x,y)
    return terrain == GRASS
  }

  isPositionPassable(x: number, y: number): boolean {
    let building = this.structure.at(x,y)
    return this.isTerrainClear(x,y)
        && (building == NOTHING || building == undefined || building == WOODEN_DOOR_OPEN)
  }

  // 
  isPositionClear(x: number, y: number): boolean {
    return this.isTerrainClear(x,y) && this.isPositionPassable(x,y)
    //let terrain = this.terrain.at(x,y)
    //let thing = this.things.at(x, y)
    //let building = this.structure.at(x,y)
    //let isClear = (terrain == GRASS) // || terrain == TREES)
    //    // && (thing == NOTHING || thing == undefined)
    //    && (building == NOTHING || building == undefined || building == WOODEN_DOOR_OPEN)

    //return isClear
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
