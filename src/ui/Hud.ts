// const hover = document.getElementById('hover')
export class Hud {
  hover: Element

  constructor() {
    this.hover = document.getElementById('hover-note')
  }

  setHoverMessage(message: string) {
    // console.log("set hover message", message)
    if (this.hover) {
      this.hover.innerHTML = `hover: ${message}`
    }
  }

  // get hover() { return document.getElementById('hover-note') }
}