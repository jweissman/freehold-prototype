import * as ex from 'excalibur';
import { SpriteSheets } from '../../resources';
import { PEASANT_WALK_RIGHT, PEASANT_WALK_DOWN, PEASANT_WALK_LEFT, PEASANT_WALK_UP, PEASANT_IDLE } from '../../constants';
import { Engine, Actor, Vector } from 'excalibur';

export class Player extends Actor {
  constructor() {
    super({
      pos: new ex.Vector(160, 160),
      width: 25,
      height: 25,
      color: new ex.Color(255, 255, 255)
    });
    this.anchor = new Vector(0,0)
  }

  onInitialize(game: Engine) {
    const walkRight = SpriteSheets.Peasant.getAnimationBetween(game, 1, 4, 125)
    const walkDown = SpriteSheets.Peasant.getAnimationBetween(game, 4, 8, 125)
    const walkLeft = SpriteSheets.Peasant.getAnimationBetween(game, 8, 12, 125)
    const walkUp = SpriteSheets.Peasant.getAnimationBetween(game, 12, 16, 125)
    const idle = SpriteSheets.Peasant.getSprite(4)

    this.addDrawing(PEASANT_WALK_RIGHT, walkRight)
    this.addDrawing(PEASANT_WALK_DOWN, walkDown)
    this.addDrawing(PEASANT_WALK_LEFT, walkLeft)
    this.addDrawing(PEASANT_WALK_UP, walkUp)
    this.addDrawing(PEASANT_IDLE, idle)

    this.setDrawing(PEASANT_WALK_LEFT)
  }

}
