import { World } from './models/world';
import { Hud } from './ui/Hud';
import { Engine, DisplayMode } from 'excalibur';

export class Game extends Engine {
  world: World;
  hud: Hud;

  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: DisplayMode.FullScreen,
      canvasElementId: 'game',
    });
    this.world = World.gen();
    this.hud = new Hud();
  }


  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}
