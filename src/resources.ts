import * as ex from 'excalibur';
const sword = require('./images/sword.png');
const fruit = require('./images/fruit.png');

let Resources = {
    Sword: new ex.Texture(sword),
    Fruit: new ex.Texture(fruit),
}

let SpriteSheets = {
    Fruit: new ex.SpriteSheet(Resources.Fruit, 5, 1, 16, 16),
}

export { Resources, SpriteSheets }
