export class Hud {
  hover: Element

  constructor() {
    this.hover = document.getElementById('hover-note')
  }

  setHoverMessage(message: string) {
    if (this.hover) {
      this.hover.innerHTML = message
    }
  }
}