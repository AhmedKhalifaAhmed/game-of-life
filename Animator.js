class Animator {
  constructor(boardController, canvasController, overlayElement, delay = 1) {
    this.boardController = boardController
    this.canvasController = canvasController
    this.overlayElement = overlayElement
    this.paused = true
    overlayElement.addEventListener('click', () => this.paused = !this.paused)
    window.requestAnimationFrame(this.animationLoop.bind(this))
    this.delay = delay
    this.currentTick = 0
  }

  animationLoop() {
    if(!this.paused && this.currentTick == 0) {
      this.boardController.step()
      this.canvasController.draw()
    }
    this.currentTick = ++this.currentTick % this.delay
    window.requestAnimationFrame(this.animationLoop.bind(this))
  }
}