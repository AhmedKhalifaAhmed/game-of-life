const rng = (populationDensity = 0.5) => () => Math.random() > populationDensity ? 1 : 0



class BoardController {
  constructor(rows=100, columns=100, populationDensity=0.5) {
    this.board = Array(rows).fill(0).map(() => Array(columns).fill(0).map(rng(populationDensity)))
  }

  step() {
    const I = this.board.length
    const J = this.board[0].length
    const shiftRange = [-1, 0, 1]
    const neighbors = Array(I).fill(0)
                      .map((_, i) => Array(J).fill(0)
                        .map((_, j) => -this.board[i][j]))
    let i, j, iShifted, jShifted
    for(i=0; i<I; ++i) {
      for(j=0; j<J; ++j) {
        shiftRange.forEach(iShift => {
          const iShifted = i + iShift
          shiftRange.forEach(jShift => {
            const jShifted = jShift + j
            if (iShifted < 0 || iShifted >= I) {
              return
            }
            if (jShifted < 0 || jShifted >= J) {
              return
            }
            neighbors[i][j] += this.board[iShifted][jShifted]
          })
        })
      }
    }
    neighbors.forEach(
      (N, i) => N.forEach(
        (n, j) => {
          this.board[i][j] = n < 2
            ? 0
            : n > 3
              ? 0
              : n == 3
                ? 1
                : this.board[i][j]
        })
    )
  }
}
