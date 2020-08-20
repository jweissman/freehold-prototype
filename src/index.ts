import * as ex from 'excalibur';
import { Play } from './scenes/level-one/play';
import { Player } from './actors/player/player';
import { Resources } from './resources';
import { Cursor } from './actors/cursor/cursor';
import { OVERWORLD } from './constants';
import { Game } from './Game';


console.log("CREATE GAME...")
const game = new Game();
const overworld = new Play(game);
game.add(OVERWORLD, overworld);

let loader = new ex.Loader();
loader.suppressPlayButton = true;
for (let key in Resources) {
  loader.addResource(Resources[key]);
}

console.log("load game")
game.start(loader).then(() => {
  console.log("start game")
  game.goToScene(OVERWORLD);
});
