import * as ex from 'excalibur';
import { Play } from './scenes/level-one/play';
import { Player } from './actors/player/player';
import { World } from './models/world';
import { Resources } from './resources';

export class Game extends ex.Engine {
  world: World
  constructor() {
    super({ width: 800, height: 600, displayMode: ex.DisplayMode.FullScreen });
    this.world = new World();
    // this.input.pointers.primary.
  }

  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}

const game = new Game();
const play = new Play(game);
const player = new Player();
player.addDrawing(Resources.Sword);

play.add(player);

game.add('levelOne', play);


let loader = new ex.Loader();
loader.playButtonText = "Let's go!"
// loader.suppressPlayButton = true;
for (let key in Resources) {
  loader.addResource(Resources[key]);
}

game.start(loader).then(() => {
  game.goToScene('levelOne');
});
