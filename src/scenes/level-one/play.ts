import { Game } from '../../Game';
import { Cursor } from '../../actors/cursor/cursor';
import { Player } from '../../actors/player/player';
import { Vector, Input, LockCameraToActorStrategy, Scene } from 'excalibur';
import { NORTH, WEST, SOUTH, EAST, OVERWORLD_CELL_SIZE, TREES, SOUTHEAST, PROGRESS_INTERVAL, GRASS, STRAWBERRY, NOTHING, WOODEN_WALL, WOODEN_FLOOR, WOODEN_DOOR_CLOSED, WOODEN_DOOR_OPEN } from '../../constants';
import { adjustPosition } from '../../models/direction';
import { ProgressBar } from '../../actors/progress';
import { WorldPosition } from '../../models/position';
import { Environs } from './Environs';
import { GameStateProvider } from '../../GameStateProvider';

type Interaction = { active: boolean, at?: WorldPosition, startedAt?: number }

export class Play extends Scene {
  environs: Environs
  cursor: Cursor
  player: Player
  _game: Game
  interaction: Interaction = { active: false }
  progressBar: ProgressBar

  public onInitialize(engine: Game) {
    this._game = engine
    this.environs = new Environs(engine)
  }

  public onActivate() {
    this.environs.tilemaps.forEach(map => this.add(map))

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
    this._game.input.pointers.primary.on('down', () => this.buildStructure())
  }

  public onPreUpdate() {
    this.camera.pos = this.player.pos
    this.handlePlayerInput()
    // if (this._game.input.pointers.primary.)
  }

  constructionLegend = {
    'Wood Wall': WOODEN_WALL,
    'Wood Door': WOODEN_DOOR_CLOSED,
    'Wood Floor': WOODEN_FLOOR,
  }
  public buildStructure() {
    console.log("would build structure...")
    let { constructing } = GameStateProvider.getGlobal()
    let [x,y] = this.cursor.hoverWorldPos
    if (constructing && this._game.world.isTerrainClear(x,y)) { //terrain.at(x,y) == GRASS) {
      let structureId = this.constructionLegend[constructing]
      this._game.world.build(x,y, structureId)
      this.environs.assembleFloor()
      this.environs.assembleStructures()
    }
  }

  handlePlayerInput() {
    if (this._game.input.keyboard.isHeld(Input.Keys.Esc)) {
      GameStateProvider.setGlobal({ constructing: null })
    }
    if (this._game.input.keyboard.isHeld(Input.Keys.Q)) {
      this._game.hud.toggleInspect()
      // GameStateProvider.setGlobal({ inspect: !GameStateProvider.getGlobal().inspect })
    }

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
          this._game.hud.collect('wood', 5)
          this.environs.paveTerrainNarrowly([
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
          this.player.move(NORTH).then(() => this.collectItems())
        } else if (this._game.input.keyboard.isHeld(Input.Keys.A)) {
          this.player.move(WEST).then(() => this.collectItems())
        } else if (this._game.input.keyboard.isHeld(Input.Keys.S)) {
          this.player.move(SOUTH).then(() => this.collectItems())
        } else if (this._game.input.keyboard.isHeld(Input.Keys.D)) {
          this.player.move(EAST).then(() => this.collectItems())
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

  collectItems() {
    // add any items on this cell to the inventory
    let [x,y] = this.player.worldPosition
    let it = this._game.world.things.at(x,y)
    if (it !== NOTHING && it !== undefined) { 
      let itemName = this._game.world.describeObject(x, y)
      console.log("collect " + itemName)
      this._game.hud.collect(itemName, 1)
      this._game.world.things.set(x,y,NOTHING)
      this.environs.thingTiles.getCell(x,y).clearSprites()
      // and actually remove from tiles?
    }
  }

  lastInteracted: number = -1
  interactionGate: number = 250
  startInteraction() {
    let now = new Date().getTime()
    let elapsed = now - this.lastInteracted
    if (elapsed >= this.interactionGate) {
      let target: [number, number] = adjustPosition(this.player.worldPosition, this.player.facing)
      let [x,y] = target
      if (this._game.world.terrain.at(x,y) == TREES) {
        this.startProgressBar(target)
      } else if (this._game.world.structure.at(x,y) == WOODEN_DOOR_CLOSED) {
        console.log('would open door')
        this._game.world.structure.set(x,y, WOODEN_DOOR_OPEN)
        this._game.world.beautifyWoodenStructures()
        this.environs.assembleStructures()
      } else if (this._game.world.structure.at(x,y) == WOODEN_DOOR_OPEN) {
        console.log('would close door')
        this._game.world.structure.set(x,y, WOODEN_DOOR_CLOSED)
        this._game.world.beautifyWoodenStructures()
        this.environs.assembleStructures()
      } else {
        console.warn('nothing to interact with!')
      }
      this.lastInteracted = now
    }
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
}
