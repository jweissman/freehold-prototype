import * as ex from 'excalibur';
import { SpriteSheets } from '../../resources';
import { Game } from '../..';
import { Cursor } from '../../actors/cursor/cursor';
import { Player } from '../../actors/player/player';
import { Vector, Input, LockCameraToActorStrategy } from 'excalibur';
import { NOTHING, NORTH, WEST, SOUTH, EAST, OVERWORLD_CELL_SIZE } from '../../constants';

export class Play extends ex.Scene {
  tiles: ex.TileMap
  cursor: Cursor
  player: Player
  _game: Game

  public onInitialize(engine: Game) {
    let mapOrigin = [ 0,0] //-OVERWORLD_CELL_SIZE / 2, -OVERWORLD_CELL_SIZE / 2 ]
    this.tiles = new ex.TileMap(
      mapOrigin[0],
      mapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      engine.world.height,
      engine.world.width
    )
    this.tiles.registerSpriteSheet('land', SpriteSheets.Terrain)
    this.tiles.registerSpriteSheet('fruit', SpriteSheets.Fruit)
    engine.world.terrain.eachPosition((x, y) => {
      let cell = this.tiles.getCell(x, y);
      cell.pushSprite(new ex.TileSprite('land', engine.world.prettyTerrain.at(x, y)))
    })
    engine.world.things.eachPosition((x, y) => {
      let cell = this.tiles.getCell(x, y);
      let value = engine.world.things.at(x, y)
      if (value !== NOTHING) {
        cell.pushSprite(new ex.TileSprite('fruit', value))
      }
    })
    this._game = engine
  }
  public onActivate() {
    this.add(this.tiles)
    this.cursor = new Cursor();
    this.player = new Player();
    this.add(this.player);
    this.add(this.cursor);

    let startWorldPos = this._game.world.randomClearPosition
    this.player.worldPosition = startWorldPos
    this.player.pos = new Vector(
      startWorldPos[0] * OVERWORLD_CELL_SIZE,
      (startWorldPos[1]) * OVERWORLD_CELL_SIZE
    )
    // this.player.idle()
    // this.camera.zoom(8)
    this.camera.addStrategy(new LockCameraToActorStrategy(this.player))
    // this.camera.pos = this.player.pos
  }

  public onPreUpdate() {
    this.camera.pos = this.player.pos
    if (!this.player.moving) {
      if (this._game.input.keyboard.isHeld(Input.Keys.W)) {
        this.player.move(NORTH)
      } else if (this._game.input.keyboard.isHeld(Input.Keys.A)) {
        this.player.move(WEST)
      } else if (this._game.input.keyboard.isHeld(Input.Keys.S)) {
        this.player.move(SOUTH)
      } else if (this._game.input.keyboard.isHeld(Input.Keys.D)) {
        this.player.move(EAST)
      } else {
        if (this.player.facing) {
          this.player.setFacing(this.player.facing)
        } else {
          this.player.idle()
        }
      }
    }
  }

  public onDeactivate() {
    this.remove(this.tiles)
  }
}
