import * as ex from 'excalibur';
import { World } from './models/world';
import { Hud } from './ui/Hud';


export class Game extends ex.Engine {
  world: World;
  hud: Hud;

  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: ex.DisplayMode.FullScreen,
      canvasElementId: 'game',
    });
    this.world = World.gen();
    this.hud = new Hud();
  }


  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}
