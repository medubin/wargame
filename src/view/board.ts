import Constant from './constants'
import Unit from './unit'
import Square from './square'
import Position from '../position'

export default class Board {
  protected board : Square[][]
  protected app : PIXI.Application
  constructor(app : PIXI.Application) {
    this.app = app
    this.board = []
    for (let x = 0; x < Constant.WIDTH; x += 1) {
      this.board.push([])
      for (let y = 0; y < Constant.HEIGHT; y += 1) {
        const square = new Square(x, y, this)
        this.board[this.board.length - 1].push(square)
        square.draw(this.app)
      }
    }
  }

  public addUnit(unit : Unit) {
    this.board[unit.position.x][unit.position.y].unit = unit
    unit.draw(this.app)
  }

  public highlightSquares(positions : Position[]) {
    for (const position of positions) {
      this.board[position.x][position.y].highlightSquare(this.app)
    }
  }

  public deHighlightSquares(positions : Position[]) {
    for (const position of positions) {
      this.board[position.x][position.y].dehighlight()
    }
  }
}
