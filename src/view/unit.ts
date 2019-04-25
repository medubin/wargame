import Constant from './constants'
import Position from '../position'

const RADIUS = 40

export default class Unit {
  public position : Position
  public movement : number
  constructor(x : number, y : number) {
    this.position = new Position(x, y)

    this.movement = 3
  }

  public draw(app : PIXI.Application) {
    const circle = new PIXI.Graphics()
    circle.beginFill(0x004211) // TODO
    circle.lineStyle(1, 0x7CFC00)
    const xPos = this.position.x * Constant.SQUARE + Constant.SQUARE / 2
    const yPos = this.position.y * Constant.SQUARE + Constant.SQUARE / 2
    circle.drawCircle(xPos, yPos, RADIUS)
    app.stage.addChild(circle)
  }

  public getMoves() : Position[] {
    const seen : { [key : string] : boolean } = {}
    seen[`${this.position.x},${this.position.y}`] = true
    let movesLeft = this.movement
    const moves : Position[] = this.position.neighbors
    let currentDepthMoves : Position[] = this.position.neighbors
    let nextDepthMoves : Position[] = []

    while (movesLeft > 1) {
      for (const currentDepthMove of currentDepthMoves) {
        const neighbors = currentDepthMove.neighbors
        for (const neighbor of neighbors) {
          const coord = `${neighbor.x},${neighbor.y}`
          if (!seen[coord]) {
            moves.push(neighbor)
            nextDepthMoves.push(neighbor)
            seen[coord] = true
          }
        }
      }
      movesLeft -= 1
      currentDepthMoves = nextDepthMoves
      nextDepthMoves = []
    }
    return moves
  }
}
