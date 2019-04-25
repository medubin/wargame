import Unit from './unit'
import Constant from './constants'
import Position from '../position'
import Board from './board'

export default class Square {
  public unit : Unit
  public position : Position
  public board : Board
  public graphic : PIXI.Graphics
  public highlight : PIXI.Graphics
  constructor(x : number, y : number, board : Board) {
    this.unit = null
    this.position = new Position(x, y)
    this.board = board
    this.onClick = this.onClick.bind(this)
  }

  public draw(app : PIXI.Application) {
    const SQUARE = Constant.SQUARE
    this.graphic = new PIXI.Graphics()
    this.graphic.beginFill(0x000000)
    this.graphic.lineStyle(1, 0x7CFC00)
    this.graphic.drawRect(
      this.position.x * SQUARE + 1, this.position.y * SQUARE + 1, SQUARE, SQUARE)
    this.graphic.interactive = true
    this.graphic.on('click', this.onClick)
    app.stage.addChild(this.graphic)
  }

  public highlightSquare(app : PIXI.Application) {
    const SQUARE = Constant.SQUARE
    this.highlight = new PIXI.Graphics()
    this.highlight.beginFill(0xFF0000)
    this.highlight.lineStyle(1, 0x7CFC00)
    this.highlight.drawRect(
      this.position.x * SQUARE + 1, this.position.y * SQUARE + 1, SQUARE, SQUARE)
    this.highlight.interactive = true
    this.highlight.on('click', this.onClick)
    app.stage.addChild(this.highlight)
  }

  public dehighlight() {
    this.highlight.destroy()
  }

  public onClick() {
    if (this.unit) {
      if (this.highlight) {
        console.log('hi')
        this.board.deHighlightSquares(this.unit.getMoves())
        this.board.deHighlightSquares([this.position])
      } else {
        this.board.highlightSquares(this.unit.getMoves())
        this.board.highlightSquares([this.position])
      }
    }
  }
}
