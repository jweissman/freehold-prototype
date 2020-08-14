import * as ex from 'excalibur';
import { SpriteSheets } from '../../resources';
import { Game } from '../..';

export class Play extends ex.Scene {
  tiles: ex.TileMap
  public onInitialize(engine: Game) {
    this.tiles = new ex.TileMap(0, 0, 16, 16, engine.world.width, engine.world.height)
    this.tiles.registerSpriteSheet('land', SpriteSheets.Terrain)
    this.tiles.registerSpriteSheet('fruit', SpriteSheets.Fruit)
    engine.world.map.cells.forEach((row,y) => {
      row.forEach((value, x) => {
        let cell = this.tiles.getCell(x,y);
        if (cell) {
          cell.pushSprite(new ex.TileSprite('land', value))
        }
      })
    })
    this.tiles.getCell(2,2).pushSprite(new ex.TileSprite('fruit', 1))
    this.tiles.getCell(2,5).pushSprite(new ex.TileSprite('fruit', 2))
  }
  public onActivate() {
    this.add(this.tiles)
    // this.camera.zoom(2)
    // this.camera.pos = new ex.Vector(200,200)
    // this.camera.pan()
  }
  public onDeactivate() {
    this.remove(this.tiles)
  }
}
