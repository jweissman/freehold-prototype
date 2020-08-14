import * as ex from 'excalibur';
const sword = require('./images/sword.png');
const fruit = require('./images/fruit.png');
const terrain = require('./images/terrain.png');
const peasant = require('./images/peasant.png');

let Resources = {
  Sword: new ex.Texture(sword),
  Fruit: new ex.Texture(fruit),
  Terrain: new ex.Texture(terrain),
  Peasant: new ex.Texture(peasant),
}

let SpriteSheets = {
  Fruit: new ex.SpriteSheet(Resources.Fruit, 5, 1, 16, 16),
  Terrain: new ex.SpriteSheet(Resources.Terrain, 8, 4, 16, 16),
  Peasant: new ex.SpriteSheet(Resources.Peasant, 4, 4, 16, 16),
}

export { Resources, SpriteSheets }
