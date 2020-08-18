import { pick } from "../util/rand";
import { Dimensions } from "./dimensions";
import { average } from "../util/average";
import { mode } from "../util/mode";
import { SOUTHEAST, NORTHWEST, NORTH, NORTHEAST, WEST, EAST, SOUTHWEST, SOUTH } from "../constants";
import { times } from "../util/times";

export class Cartogram {
  // private cells: number[][] = [];
  constructor(public name: string, public dims: Dimensions, public cells: number[][] = []) {
  }

  distributeRoughGrainedValues(valueDistribution: number[], grain: number = 16) {
    this.eachPosition((x, y) => {
      if (x % grain === 0 && y % grain === 0) {
        let val = pick(...valueDistribution)
        for (let dx = 0; dx < grain; dx++) {
          for (let dy = 0; dy < grain; dy++) {
            let targetX = x + dx
            let targetY = y + dy
            this.cells[targetY] = this.cells[targetY] || []
            this.cells[targetY][targetX] = val
          }
        }
      // } else {
        // this.cells[y][x] = this.cells[Math.floor(y/grain)][Math.floor(x/grain)] //pick(...valueDistribution)
      }
      // let placeHere = hasPlacementRestrictions ? shouldPlace(x, y) : true
      // if (placeHere) {
      // }
    }, (y) => this.cells[y] = this.cells[y] || [])
  }

  distributeValues(valueDistribution: number[], shouldPlace?: (x: number, y: number) => boolean) {
    let hasPlacementRestrictions = !!shouldPlace
    console.log("Build map", this.name)
    this.eachPosition((x, y) => {
      let placeHere = hasPlacementRestrictions ? shouldPlace(x, y) : true
      if (placeHere) {
        this.cells[y][x] = pick(...valueDistribution)
      }
    }, (y) => this.cells[y] = [])
  }

  copy(newName: string): Cartogram {
    let newCells = [] //this.cells.slice()
    this.eachPosition((x, y) => {
      newCells[y][x] = this.at(x,y)
    }, (y) => newCells[y] = [])
    // for ()
    let newMap = new Cartogram(newName, this.dims, newCells)
    // this.eachPosition((x, y) => 
    //   newMap.set(x,y,this.at(x,y))
    //   // let placeHere = hasPlacementRestrictions ? shouldPlace(x, y) : true
    // )
    return newMap;
  }

  at(x: number, y: number) { return this.cells[y] && this.cells[y][x] }

  set(x: number, y: number, value: number) {
    this.cells[y][x] = value
    // throw new Error("Method not implemented.");
  }

  smooth(rounds: number = 3) {
    for (let i = 0; i < rounds; i++) {
      let newCells: number[][] = []
      this.eachPosition((x,y) => {
        let originalValue = this.at(x,y)
        let neighbors = this.neighbors(x,y)
        let modalValue = mode(originalValue, ...neighbors)
        newCells[y][x] = pick(...times(13, modalValue), ...neighbors, originalValue)
      }, (y) => newCells[y] = [])
      this.cells = newCells;
    }
  }

  eachPosition(eachCellCallback: (x: number, y: number) => void, eachRowCallback?: (y: number) => void) {
    for (let y = 0; y < this.dims.height; y++) {
      eachRowCallback && eachRowCallback(y)
      for (let x = 0; x < this.dims.width; x++) {
        eachCellCallback(x,y)
      }
    }
  }

  // static neighborDirections = { NORTHWEST: 0,  NORTH: 1, NORTHEAST: 2, 
  //                               WEST: 3, EAST: 5,
  //                               SOUTHWEST: 6, SOUTH: 7, SOUTHEAST: 8 }
  // neighborPositions(x: number, y: number): number[] {
  //   return [
  //     [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
  //     [x - 1, y], , [x + 1, y],
  //     [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
  //   ]
  //     // .filter(([x, y]) => this.withinBounds(x, y))
  //     .map(([x, y]) => this.cells[y][x])
  // }
  neighbors(x: number, y: number): number[] {
    return [
      [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
      [x - 1, y], , [x + 1, y],
      [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
    ]
      .filter(([x, y]) => this.withinBounds(x, y))
      .map(([x, y]) => this.cells[y][x])
  }

  labelledNeighbors(x: number, y: number, defaultValue: number = 0) {
    return {
      [NORTHWEST]: this.at(x - 1, y - 1) || defaultValue,
      [NORTH]: this.at(x, y - 1) || defaultValue,
      [NORTHEAST]: this.at(x + 1, y - 1) || defaultValue,
      [WEST]: this.at(x - 1, y) || defaultValue,
      [EAST]: this.at(x + 1, y) || defaultValue,
      [SOUTHWEST]: this.at(x - 1, y + 1) || defaultValue,
      [SOUTH]: this.at(x, y + 1) || defaultValue,
      [SOUTHEAST]: this.at(x + 1, y + 1) || defaultValue
    }
      // .filter(([x, y]) => this.withinBounds(x, y))
      // .map(([x, y]) => this.cells[y][x])
  }

  protected withinBounds(x: number, y: number) {
    return x >= 0 && x < this.dims.width && y >= 0 && y < this.dims.height
  }
}
