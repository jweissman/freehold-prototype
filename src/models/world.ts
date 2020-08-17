import { Dimensions } from "./dimensions";
import { Cartogram } from "./Cartogram";
import { GRASS, WATER, MOUNTAIN, NOTHING, GRAPES, BANANA, APPLES, PLUM, BLUEBERRY, SOUTH, NORTH, WATER_WITH_GRASS_SOUTH, NORTHEAST, SOUTHEAST, EAST, WEST, WATER_WITH_GRASS_NORTH, WATER_WITH_GRASS_WEST, WATER_WITH_GRASS_EAST, NORTHWEST, SOUTHWEST, GRASS_WITH_WATER_SOUTHWEST, GRASS_WITH_WATER_SOUTHEAST, GRASS_WITH_WATER_NORTHEAST, GRASS_WITH_WATER_NORTHWEST, WATER_WITH_GRASS_NORTHEAST, WATER_WITH_GRASS_SOUTHEAST } from "../constants";
import { pick } from "../util/rand";
import { times } from "../util/times";
import { WorldPosition } from "./position";

export class World {
  terrain: Cartogram
  things: Cartogram
  prettyTerrain: Cartogram

  generateRawTerrain(dims: Dimensions) {
    let terrainDistribution = [
      ...times(13, GRASS), 
      ...times(8, WATER),
      // ...times(11, MOUNTAIN)
    ]
    this.terrain = new Cartogram('terrain', dims)
    this.terrain.distributeValues(terrainDistribution)
    this.terrain.smooth(3)
  }

  assemblePrettyTerrain() {
    // assemble pretty terrain
    this.prettyTerrain = this.terrain.copy('prettyTerrain')
    this.prettyTerrain.eachPosition((x, y) => {
      if (this.terrain.at(x, y) == GRASS) {
        let neighbors = this.terrain.labelledNeighbors(x, y)
        if (
          neighbors[NORTH] == GRASS &&
          neighbors[EAST] == GRASS &&
          neighbors[WEST] == GRASS &&
          neighbors[SOUTH] == WATER
        ) {
          this.prettyTerrain.set(x, y, WATER_WITH_GRASS_NORTH)
        }

        if (
          neighbors[NORTH] == WATER &&
          neighbors[EAST] == GRASS &&
          neighbors[WEST] == GRASS &&
          neighbors[SOUTH] == GRASS
        ) {
          this.prettyTerrain.set(x, y, WATER_WITH_GRASS_SOUTH)
        }

        if (
          neighbors[NORTH] == GRASS &&
          neighbors[EAST] == WATER &&
          neighbors[WEST] == GRASS &&
          neighbors[SOUTH] == GRASS
        ) {
          this.prettyTerrain.set(x, y, WATER_WITH_GRASS_WEST)
        }

        if (
          neighbors[NORTH] == GRASS &&
          neighbors[EAST] == GRASS &&
          neighbors[WEST] == WATER &&
          neighbors[SOUTH] == GRASS
        ) {
          this.prettyTerrain.set(x, y, WATER_WITH_GRASS_EAST)
        }

        if (
          neighbors[NORTH] == GRASS &&
          neighbors[EAST] == GRASS &&
          neighbors[WEST] == WATER &&
          neighbors[SOUTH] == WATER
        ) {
          this.prettyTerrain.set(x, y, WATER_WITH_GRASS_NORTHEAST)
        }

        if (
          neighbors[NORTH] == WATER &&
          neighbors[EAST] == GRASS &&
          neighbors[WEST] == WATER &&
          neighbors[SOUTH] == GRASS
        ) {
          this.prettyTerrain.set(x, y, WATER_WITH_GRASS_SOUTHEAST)
        }

        const grassAllFourDirections = (
          neighbors[NORTH] == GRASS &&
          neighbors[EAST] == GRASS &&
          neighbors[WEST] == GRASS &&
          neighbors[SOUTH] == GRASS
        )

        if (grassAllFourDirections) {
          if (neighbors[NORTHEAST] == GRASS &&
              neighbors[NORTHWEST] == GRASS &&
              neighbors[SOUTHEAST] == GRASS &&
              neighbors[SOUTHWEST] == WATER) {
            this.prettyTerrain.set(x, y, GRASS_WITH_WATER_SOUTHWEST)
          }

          if (neighbors[NORTHEAST] == GRASS &&
              neighbors[NORTHWEST] == GRASS &&
              neighbors[SOUTHEAST] == WATER &&
              neighbors[SOUTHWEST] == GRASS) {
            this.prettyTerrain.set(x, y, GRASS_WITH_WATER_SOUTHEAST)
          }

          if (neighbors[NORTHEAST] == GRASS &&
              neighbors[NORTHWEST] == WATER &&
              neighbors[SOUTHEAST] == GRASS &&
              neighbors[SOUTHWEST] == GRASS) {
            this.prettyTerrain.set(x, y, GRASS_WITH_WATER_NORTHWEST)
          }

          if (neighbors[NORTHEAST] == WATER &&
              neighbors[NORTHWEST] == GRASS &&
              neighbors[SOUTHEAST] == GRASS &&
              neighbors[SOUTHWEST] == GRASS) {
            this.prettyTerrain.set(x, y, GRASS_WITH_WATER_NORTHEAST)
          }
        }
      }
    })


  }

  constructor(dims: Dimensions) {
    this.generateRawTerrain(dims)
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
    let world = new World({ width: 100, height: 100 })
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
