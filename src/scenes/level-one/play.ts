import * as ex from 'excalibur';
import { SpriteSheets } from '../../resources';
import { Game } from '../../Game';
import { Cursor } from '../../actors/cursor/cursor';
import { Player } from '../../actors/player/player';
import { Vector, Input, LockCameraToActorStrategy } from 'excalibur';
import { NOTHING, NORTH, WEST, SOUTH, EAST, OVERWORLD_CELL_SIZE, TREES } from '../../constants';
import { adjustPosition } from '../../models/direction';
import { ProgressBar } from '../../actors/progress';

type Interaction = { active: boolean, at?: [number,number], percent?: number }

export class Play extends ex.Scene {
  terrainTiles: ex.TileMap
  thingTiles: ex.TileMap
  cursor: Cursor
  player: Player
  _game: Game
  interaction: Interaction = { active: false }
  progressBar: ProgressBar

  public onInitialize(engine: Game) {
    this._game = engine
    // this.
    this.paveTerrain()
    this.embedThings()
  }

  paveTerrain() {
    this.remove(this.terrainTiles)
    console.log("pave terrain...")
    let terrainSource = this._game.world.prettyTerrain
    let isOffset = true
    let terrainMapOrigin = isOffset ? [ 0,0]
                                    : [-OVERWORLD_CELL_SIZE / 2, -OVERWORLD_CELL_SIZE / 2 ]
    this.terrainTiles = new ex.TileMap(
      terrainMapOrigin[0],
      terrainMapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      this._game.world.height - 1,
      this._game.world.width - 1
    )
    this.terrainTiles.registerSpriteSheet('land', SpriteSheets.Terrain)
    this._game.world.terrain.eachPosition((x, y) => {
      let cell = this.terrainTiles.getCell(x, y);
      if (cell) {
        cell.clearSprites()
        cell.pushSprite(new ex.TileSprite('land', terrainSource.at(x, y)))
      }
    })

    this.add(this.terrainTiles)
  }

  embedThings() {
    let thingMapOrigin = [-OVERWORLD_CELL_SIZE / 2, -OVERWORLD_CELL_SIZE / 2 ]
    this.thingTiles = new ex.TileMap(
      thingMapOrigin[0],
      thingMapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      this._game.world.height - 1,
      this._game.world.width - 1
    )
    this.thingTiles.registerSpriteSheet('fruit', SpriteSheets.Fruit)
    this._game.world.things.eachPosition((x, y) => {
      let cell = this.thingTiles.getCell(x, y);
      if (cell) {
      let value = this._game.world.things.at(x, y)
      if (value !== NOTHING) {
        let sprite = new ex.TileSprite('fruit', value)
        cell.pushSprite(sprite)
      }
    }
    })
    // this._game = engine
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

    if (this.interaction.active) {
      // need to keep holding E or it goes away
      if (this._game.input.keyboard.isHeld(Input.Keys.E)) {
        console.log("interact -- continue", this.interaction.percent)
        this.interaction.percent += 0.9
        if (this.interaction.percent >= 100) {
          console.log("interact complete")
          // this.world.terrain
          this._game.world.chopTreeAt(...this.interaction.at)
          this.paveTerrain()

          this.interaction.active = false
          this.remove(this.progressBar)
        }
      } else {
        this.interaction.active = false
        this.remove(this.progressBar)
      }
    } else {
      if (!this.player.moving) {
        if (this._game.input.keyboard.isHeld(Input.Keys.W)) {
          this.player.move(NORTH)
        } else if (this._game.input.keyboard.isHeld(Input.Keys.A)) {
          this.player.move(WEST)
        } else if (this._game.input.keyboard.isHeld(Input.Keys.S)) {
          this.player.move(SOUTH)
        } else if (this._game.input.keyboard.isHeld(Input.Keys.D)) {
          this.player.move(EAST)
        } else if (this._game.input.keyboard.isHeld(Input.Keys.E)) {
          this.startInteraction()
        } else {
          if (this.player.facing) {
            this.player.setFacing(this.player.facing)
          } else {
            // this.player.idle()

          }
        }
      }
  }
  }

  startInteraction() {
    // if (this.interaction.active) {
    // } else {
      // create progress wherever player is facing, if it is a forest
      let target: [number, number] = adjustPosition(this.player.worldPosition, this.player.facing)
      if (this._game.world.terrain.at(...target) == TREES) {
        this.startProgressBar(target)
      }
    // }
  }

  startProgressBar(target: [number, number]) {
    this.interaction = { active: true, at: target, percent: 0 }
    this.progressBar = new ProgressBar();
    this.progressBar.pos = new Vector(target[0] * OVERWORLD_CELL_SIZE, target[1] * OVERWORLD_CELL_SIZE)
    // let bar = new ProgressBar(this.progress.at)
    // this.progressBar.visible = true
    this.add(this.progressBar)
  }


  public onDeactivate() {
    this.remove(this.terrainTiles)
  }
}
