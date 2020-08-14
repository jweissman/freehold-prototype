import { pick } from "../util/rand";
import { Dimensions } from "./dimensions";
import { average } from "../util/average";
import { mode } from "../util/mode";

export class Cartogram {
  cells: number[][] = [];
  constructor(public dims: Dimensions, private values: number[]) {
    for (let y = 0; y < dims.height; y++) {
      this.cells[y] = [];
      for (let x = 0; x < dims.width; x++) {
        this.cells[y][x] = pick(...values);
      }
    }
  }

  smooth(times: number = 1) {
    for (let i = 0; i < times; i++) {
      let newCells: number[][] = []
      for (let y = 0; y < this.dims.height; y++) {
        newCells[y] = [];
        for (let x = 0; x < this.dims.width; x++) {
          let value = mode(this.cells[y][x], ...this.neighbors(x, y))
          newCells[y][x] = value // Math.round(avg)
        }
      }
      this.cells = newCells;
    }
  }

  protected neighbors(x: number, y: number): number[] {
    return [
      [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
      [x - 1, y], , [x + 1, y],
      [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
    ]
      .filter(([x, y]) => this.withinBounds(x, y))
      .map(([x, y]) => this.cells[y][x])
  }

  protected withinBounds(x: number, y: number) {
    return x >= 0 && x < this.dims.width && y >= 0 && y < this.dims.height
  }
}
