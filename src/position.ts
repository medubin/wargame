export default class Position {
  public x : number
  public y : number
  constructor(x : number, y : number) {
    this.x = x
    this.y = y
  }

  public get neighbors() : Position[] {
    return [
      new Position(this.x, this.y - 1),
      new Position(this.x, this.y + 1),
      new Position(this.x - 1, this.y),
      new Position(this.x + 1, this.y),
    ]
  }
}
