class CanvasController {
  constructor(boardController, canvas) {
    this.boardController = boardController
    this.canvas = canvas
    this.canvas.height = window.innerHeight
    this.canvas.width = window.innerWidth
    this.c = canvas.getContext('2d')
    this.draw()
  }

  draw() {
    // Get the game board and dimensions
    const board = this.boardController.board
    const boardHeight = this.boardController.board.length
    const boardWidth = this.boardController.board[0].length
    // Calculate unit dimensions
    const unitHeight = this.canvas.height / boardHeight
    const unitWidth = this.canvas.width / boardWidth
    // Clear canvas
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    // Draw rectangles
    board.forEach((row, r) =>
      row.forEach((cell, c) =>{
          if(cell == 1) {
            this.c.fillStyle = 'black'
          } else {
            this.c.fillStyle = 'white'
          }
          this.c.fillRect(c * unitWidth, r * unitHeight, unitWidth, unitHeight)
        }
      )
    )
  }
}