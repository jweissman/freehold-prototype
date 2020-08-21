import * as ex from 'excalibur';
import { SpriteSheets } from '../../resources';
import { Game } from '../../Game';
import { Cursor } from '../../actors/cursor/cursor';
import { Player } from '../../actors/player/player';
import { Vector, Input, LockCameraToActorStrategy } from 'excalibur';
import { NOTHING, NORTH, WEST, SOUTH, EAST, OVERWORLD_CELL_SIZE, TREES, SOUTHEAST, PROGRESS_INTERVAL } from '../../constants';
import { adjustPosition } from '../../models/direction';
import { ProgressBar } from '../../actors/progress';
import { WorldPosition } from '../../models/position';

type Interaction = { active: boolean, at?: WorldPosition, startedAt?: number }

export class Play extends ex.Scene {
  terrainTiles: ex.TileMap
  thingTiles: ex.TileMap
  cursor: Cursor
  player: Player
  _game: Game
  interaction: Interaction = { active: false }
  progressBar: ProgressBar

  get terrainSource() { return this._game.world.prettyTerrain }

  public onInitialize(engine: Game) {
    this._game = engine
    // this.

    // let terrainSource = this._game.world.prettyTerrain
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
    this.paveTerrain()

    let thingMapOrigin = [-OVERWORLD_CELL_SIZE / 2, -OVERWORLD_CELL_SIZE / 2]
    this.thingTiles = new ex.TileMap(
      thingMapOrigin[0],
      thingMapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      this._game.world.height - 1,
      this._game.world.width - 1
    )
    this.thingTiles.registerSpriteSheet('fruit', SpriteSheets.Fruit)

    this.embedThings()
  }

  paveTerrain() {
    console.log("pave terrain...")
    this._game.world.terrain.eachPosition((x, y) => {
      let cell = this.terrainTiles.getCell(x, y);
      if (cell) {
        cell.clearSprites()
        cell.pushSprite(new ex.TileSprite('land', this.terrainSource.at(x, y)))
      }
    })
  }

  paveTerrainNarrowly(positions: [number, number][]) {
    positions.forEach(([x,y]) => {
      let cell = this.terrainTiles.getCell(x, y);
      if (cell) {
        cell.clearSprites()
        cell.pushSprite(new ex.TileSprite('land', this.terrainSource.at(x, y)))
      }
    })

  }

  embedThings() {
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
    this.camera.addStrategy(new LockCameraToActorStrategy(this.player))
  }


  public onPreUpdate() {
    this.camera.pos = this.player.pos
    if (this.interaction.active) {
      // need to keep holding E or it goes away
      if (this._game.input.keyboard.isHeld(Input.Keys.E)) {
        let now = new Date().getTime()
        let elapsed = now - this.interaction.startedAt
        console.log("interact -- continue", elapsed)
        // this.interaction.percent += 1
        if (elapsed >= PROGRESS_INTERVAL) {
          console.log("interact complete")
          // this.world.terrain
          let [x,y] = this.interaction.at
          this._game.world.chopTreeAt(x,y)
          this.paveTerrainNarrowly([
            [x,y],
            [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
            [x - 1, y], , [x + 1, y],
            [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
          ])

          this.interaction.active = false
          this.remove(this.progressBar)
        }
      } else {
        this.interaction.active = false
        this.remove(this.progressBar)
      }
    } else {
      if (!this.player.moving) {
        if (this._game.input.keyboard.isHeld(Input.Keys.E)) {
          this.startInteraction()
        } else if (this._game.input.keyboard.isHeld(Input.Keys.W)) {
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
    this.interaction = {
      active: true,
      at: target as WorldPosition,
      startedAt: new Date().getTime()
    }
    this.progressBar = new ProgressBar();
    this.progressBar.pos = new Vector(target[0] * OVERWORLD_CELL_SIZE, target[1] * OVERWORLD_CELL_SIZE)
    this.add(this.progressBar)
  }


  public onDeactivate() {
    this.remove(this.terrainTiles)
  }
}
