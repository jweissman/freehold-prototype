import { NORTH, SOUTH, WEST, EAST } from "../constants";
import { WorldPosition } from "./position";

export type Direction = typeof NORTH
               | typeof SOUTH
               | typeof WEST
               | typeof EAST

export function adjustPosition(position: WorldPosition, direction: Direction): WorldPosition {
  let [x,y] = position
  if (direction === NORTH) {
    return [x, y-1] as WorldPosition
  } else if (direction === WEST) {
    return [x-1, y] as WorldPosition
  } else if (direction === SOUTH) {
    return [x, y+1] as WorldPosition
  } else if (direction === EAST) {
    return [x+1, y] as WorldPosition
  } else {
    throw new Error("Invalid direction to adjustPosition: " + direction)
  }
}