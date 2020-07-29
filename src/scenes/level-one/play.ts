import * as ex from 'excalibur';
import { SpriteSheets } from '../../resources';
import { Game } from '../..';

export class Play extends ex.Scene {
  map: ex.TileMap
  public onInitialize(engine: Game) {
    this.map = new ex.TileMap(0, 0, 16, 16, engine.world.width, engine.world.height)
    this.map.registerSpriteSheet('fruit', SpriteSheets.Fruit)
    engine.world.map.forEach((row,y) => {
      row.forEach((value, x) => {
        let cell = this.map.getCell(x,y);
        if (cell) {
          cell.pushSprite(new ex.TileSprite('fruit', value))
        }
      })
    })
    // this.map.getCell(2,2).pushSprite(new ex.TileSprite('fruit', 1))
    // this.map.getCell(2,5).pushSprite(new ex.TileSprite('fruit', 2))
  }
  public onActivate() {
    this.add(this.map)
  }
  public onDeactivate() {
    this.remove(this.map)
  }
}
