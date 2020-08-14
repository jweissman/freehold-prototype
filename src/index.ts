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
    super({ width: 800, height: 600, displayMode: ex.DisplayMode.FullScreen });
    this.world = World.gen() //new World({ width: 80, height: 60 });
    // this.input.pointers.primary.
  }

  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}

const game = new Game();
const overworld = new Play(game);
const cursor = new Cursor();
// cursor.addDrawing(Resources.Sword)
const player = new Player();

// player.addAn
// player.addDrawing();

overworld.add(player);
overworld.add(cursor);

game.add(OVERWORLD, overworld);

let loader = new ex.Loader();
// loader.playButtonText = "Let's go!"
loader.suppressPlayButton = true;
for (let key in Resources) {
  loader.addResource(Resources[key]);
}

game.start(loader).then(() => {
  game.goToScene(OVERWORLD);
});
