import * as ex from 'excalibur';
import { Play } from './scenes/level-one/play';
import { Player } from './actors/player/player';
import { World } from './models/world';
import { Resources } from './resources';
import { Cursor } from './actors/cursor/cursor';
import { OVERWORLD } from './constants';


export class Game extends ex.Engine {
  world: World
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: ex.DisplayMode.FullScreen,
      canvasElementId: 'game',
    });
    this.world = World.gen()
  }

  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}

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
