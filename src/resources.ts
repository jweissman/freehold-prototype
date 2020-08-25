import * as ex from 'excalibur';
import { OVERWORLD_CELL_SIZE } from './constants';
const sword = require('./images/sword.png');
const fruit = require('./images/fruit.png');
const terrain = require('./images/terrain-deep.png');
// const terrainSmooth = require('./images/terrain.png');
const peasant = require('./images/peasant.png');
const progress = require('./images/progress.png')
const structure = require('./images/structure.png')

const floor = require('./images/floors.png')

let Resources = {
  Sword: new ex.Texture(sword),
  Fruit: new ex.Texture(fruit),
  Terrain: new ex.Texture(terrain),
  Peasant: new ex.Texture(peasant),
  Progress: new ex.Texture(progress),
  Structure: new ex.Texture(structure),
  Floor: new ex.Texture(floor),
}

let sz = OVERWORLD_CELL_SIZE
let SpriteSheets = {
  Fruit: new ex.SpriteSheet(Resources.Fruit, 7, 2, sz, sz),
  Terrain: new ex.SpriteSheet(Resources.Terrain, 8, 8, sz, sz),
  Peasant: new ex.SpriteSheet(Resources.Peasant, 4, 4, sz, sz),
  Progress: new ex.SpriteSheet(Resources.Progress, 17, 1, sz, sz),
  Structure: new ex.SpriteSheet(Resources.Structure, 4, 8, sz, sz),
  Floor: new ex.SpriteSheet(Resources.Floor, 2, 2, sz, sz),
}

export { Resources, SpriteSheets }
