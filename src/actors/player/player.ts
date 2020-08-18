import * as ex from 'excalibur';
import { SpriteSheets } from '../../resources';
import { PEASANT_WALK_RIGHT, PEASANT_WALK_DOWN, PEASANT_WALK_LEFT, PEASANT_WALK_UP, PEASANT_IDLE, NORTH, WEST, SOUTH, EAST, PEASANT_FACE_LEFT, PEASANT_FACE_RIGHT, PEASANT_FACE_DOWN, PEASANT_FACE_UP, OVERWORLD_CELL_SIZE } from '../../constants';
import { Engine, Actor, Vector } from 'excalibur';
import { Game } from '../..';
import { Direction, adjustPosition } from '../../models/direction';
import { WorldPosition } from '../../models/position';

export class Player extends Actor {
  _game: Game
  worldPosition: WorldPosition = [0, 0] as WorldPosition //new Vector(0,0)
  moving?: Direction = null
  facing?: Direction = null
  walkSpeed: number = 230

  constructor() {
    super({
      // pos: new ex.Vector(0,0),
      width: OVERWORLD_CELL_SIZE * 2,
      height: OVERWORLD_CELL_SIZE * 2,
      color: new ex.Color(255, 255, 255)
    });
    this.anchor = new Vector(0.5,0.5)
  }

  onInitialize(game: Game) {
    const walkRight = SpriteSheets.Peasant.getAnimationBetween(game, 0, 4, 125)
    const walkDown = SpriteSheets.Peasant.getAnimationBetween(game, 4, 8, 125)
    const walkLeft = SpriteSheets.Peasant.getAnimationBetween(game, 8, 12, 125)
    const walkUp = SpriteSheets.Peasant.getAnimationBetween(game, 12, 16, 125)
    const idle = SpriteSheets.Peasant.getSprite(4)
    const faceRight = SpriteSheets.Peasant.getSprite(0)
    const faceLeft = SpriteSheets.Peasant.getSprite(8)
    const faceUp = SpriteSheets.Peasant.getSprite(12)

    this.addDrawing(PEASANT_WALK_RIGHT, walkRight)
    this.addDrawing(PEASANT_WALK_DOWN, walkDown)
    this.addDrawing(PEASANT_WALK_LEFT, walkLeft)
    this.addDrawing(PEASANT_WALK_UP, walkUp)

    this.addDrawing(PEASANT_FACE_RIGHT, faceRight)
    this.addDrawing(PEASANT_FACE_LEFT, faceLeft)
    this.addDrawing(PEASANT_FACE_UP, faceUp)
    this.addDrawing(PEASANT_FACE_DOWN, idle)

    this.addDrawing(PEASANT_IDLE, idle)

    this._game = game
    this.idle()
  }

  private canMove(direction: Direction): boolean {
    let [x,y] = adjustPosition(this.worldPosition, direction)
    if (this._game.world.isPositionClear(x,y+1)) {
      return true
    }
    return false
  }

  async move(direction: Direction) {
    if (!this.moving) {
      if (this.canMove(direction)) {
        this.setMoving(direction)
        let target = adjustPosition(this.worldPosition, direction)
        await this.actions.moveTo(
          target[0] * OVERWORLD_CELL_SIZE,
          target[1] * OVERWORLD_CELL_SIZE,
          this.walkSpeed
        ).asPromise()
        this.worldPosition = target
        this.moving = null
      } else {
        // not moving, but can't move this direction -- face it
        this.setFacing(direction)
      }
    } else {
      // console.log("Cannot move player -- already moving")
    }
  }

  facingAnims = {
    [WEST]: PEASANT_FACE_LEFT,
    [EAST]: PEASANT_FACE_RIGHT,
    [NORTH]: PEASANT_FACE_UP,
    [SOUTH]: PEASANT_FACE_DOWN,
  }

  setFacing(direction: Direction) {
    this.facing = direction;
    this.setDrawing(this.facingAnims[direction])
  }

  setMoving(direction: Direction) {
    this.moving = direction
    // this.face(direction)
    this.facing = direction
    if (direction === NORTH) {
      this.setDrawing(PEASANT_WALK_UP)
    } else if (direction === WEST) {
      this.setDrawing(PEASANT_WALK_LEFT)
    } else if (direction === SOUTH) {
      this.setDrawing(PEASANT_WALK_DOWN)
    } else if (direction === EAST) {
      this.setDrawing(PEASANT_WALK_RIGHT)
    }
  }

  idle() {
    this.facing = SOUTH
    this.setDrawing(PEASANT_IDLE)
  }

}
