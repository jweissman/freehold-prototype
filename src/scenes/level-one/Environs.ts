import * as ex from 'excalibur';
import { Game } from '../../Game';
import { NOTHING, OVERWORLD_CELL_SIZE } from '../../constants';
import { SpriteSheets } from '../../resources';

export class Environs {
  terrainTiles: ex.TileMap;
  thingTiles: ex.TileMap;
  structureTiles: ex.TileMap;

  get tilemaps() { return [this.terrainTiles, this.thingTiles, this.structureTiles]; }
  get terrainSource() { return this.game.world.prettyTerrain; }
  get structureSource() { return this.game.world.prettyStructure; }

  constructor(private game: Game) {
    let isOffset = true;
    let terrainMapOrigin = isOffset ? [0, 0]
      : [-OVERWORLD_CELL_SIZE / 2, -OVERWORLD_CELL_SIZE / 2];
    this.terrainTiles = new ex.TileMap(
      terrainMapOrigin[0],
      terrainMapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      this.game.world.height - 1,
      this.game.world.width - 1
    );
    this.terrainTiles.registerSpriteSheet('land', SpriteSheets.Terrain);
    this.paveTerrain();

    let thingMapOrigin = [-OVERWORLD_CELL_SIZE / 2, -OVERWORLD_CELL_SIZE / 2];
    this.thingTiles = new ex.TileMap(
      thingMapOrigin[0],
      thingMapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      this.game.world.height - 1,
      this.game.world.width - 1
    );
    this.thingTiles.registerSpriteSheet('fruit', SpriteSheets.Fruit);

    this.embedThings();

    let structureMapOrigin = thingMapOrigin;
    this.structureTiles = new ex.TileMap(
      structureMapOrigin[0],
      structureMapOrigin[1],
      OVERWORLD_CELL_SIZE,
      OVERWORLD_CELL_SIZE,
      this.game.world.height - 1,
      this.game.world.width - 1);
    this.structureTiles.registerSpriteSheet('structure', SpriteSheets.Structure);

  }

  paveTerrain() {
    console.log("pave terrain...");
    this.game.world.terrain.eachPosition((x, y) => {
      let cell = this.terrainTiles.getCell(x, y);
      if (cell) {
        cell.clearSprites();
        cell.pushSprite(new ex.TileSprite('land', this.terrainSource.at(x, y)));
      }
    });
  }

  paveTerrainNarrowly(positions: [number, number][]) {
    positions.forEach(([x, y]) => {
      let cell = this.terrainTiles.getCell(x, y);
      if (cell) {
        cell.clearSprites();
        cell.pushSprite(new ex.TileSprite('land', this.terrainSource.at(x, y)));
      }
    });
  }

  embedThings() {
    this.game.world.things.eachPosition((x, y) => {
      let cell = this.thingTiles.getCell(x, y);
      if (cell) {
        let value = this.game.world.things.at(x, y);
        if (value !== NOTHING) {
          let sprite = new ex.TileSprite('fruit', value);
          cell.pushSprite(sprite);
        }
      }
    });
    // this._game = engine
  }

  assembleStructures() {
    this.game.world.structure.eachPosition((x, y) => {
      let cell = this.structureTiles.getCell(x, y);
      if (cell) {
        let val = this.game.world.structure.at(x, y)
        if (val !== NOTHING) {
          let sprite = new ex.TileSprite('structure', this.structureSource.at(x, y))
          cell.clearSprites()
          cell.pushSprite(sprite)
        }
      }
    })
  }
}
