import * as ex from 'excalibur';
import { SpriteSheets } from '../../resources';
import { Game } from '../..';
import { Cursor } from '../../actors/cursor/cursor';
import { Player } from '../../actors/player/player';
import { Vector, Input, LockCameraToActorStrategy } from 'excalibur';
import { NOTHING, NORTH, WEST, SOUTH, EAST, OVERWORLD_CELL_SIZE } from '../../constants';

export class Play extends ex.Scene {
  terrainTiles: ex.TileMap
  thingTiles: ex.TileMap
  cursor: Cursor
  player: Player
  _game: Game

  public onInitialize(engine: Game) {
    let terrainSource = engine.world.prettyTerrain
    let isOffset = true
    let terrainMapOrigin = isOffset ? [ 0,0]
                                    : [-OVERWORLD_CELL_SIZE / 2, -OVERWORLD_CELL_SIZE / 2 ]
    this.terrainTiles = new ex.TileMap(
      terrainMapOrigin[0],
      terrainMapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      engine.world.height - 1,
      engine.world.width - 1
    )
    this.terrainTiles.registerSpriteSheet('land', SpriteSheets.Terrain)
    engine.world.terrain.eachPosition((x, y) => {
      let cell = this.terrainTiles.getCell(x, y);
      if (cell) {
        cell.pushSprite(new ex.TileSprite('land', terrainSource.at(x, y)))
      }
    })

    let thingMapOrigin = [-OVERWORLD_CELL_SIZE / 2, -OVERWORLD_CELL_SIZE / 2 ]
    this.thingTiles = new ex.TileMap(
      thingMapOrigin[0],
      thingMapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      engine.world.height - 1,
      engine.world.width - 1
    )
    this.thingTiles.registerSpriteSheet('fruit', SpriteSheets.Fruit)
    engine.world.things.eachPosition((x, y) => {
      let cell = this.thingTiles.getCell(x, y);
      if (cell) {
      let value = engine.world.things.at(x, y)
      if (value !== NOTHING) {
        let sprite = new ex.TileSprite('fruit', value)
        cell.pushSprite(sprite)
      }
    }
    })
    this._game = engine
  }
  public onActivate() {
    this.add(this.terrainTiles)
    this.add(this.thingTiles)
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
          // this.player.idle()
        }
      }
    }
  }

  public onDeactivate() {
    this.remove(this.terrainTiles)
  }
}
