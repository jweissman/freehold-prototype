import { setGlobal, getGlobal } from 'reactn'
import { GameStateProvider } from '../GameStateProvider'

// thin wrapper around game state provider setters..
export class Hud {
  setHoverMessage(message: string) {
    if (message !== GameStateProvider.getGlobal().message) {
      GameStateProvider.setGlobal({ message })
    }
  }

  lastToggledInspect: number = -1
  toggleInspect() { 
    let now = new Date().getTime()
    let elapsed = now - this.lastToggledInspect
    if (elapsed >= 200) {
      GameStateProvider.setGlobal({ inspect: !GameStateProvider.getGlobal().inspect })
      this.lastToggledInspect = now
    }
  }

  collect(item: string, count: number) {
    let { inventory } = GameStateProvider.getGlobal()
    inventory[item] = inventory[item] || 0
    inventory[item] += count
    GameStateProvider.setGlobal({ inventory})
  }
}