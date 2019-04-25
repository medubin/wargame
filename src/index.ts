import ViewService from './view/view_service'
import Board from './view/board'
import Unit from './view/unit'

const element = document.getElementById('game')
const view = new ViewService(element)
const board = new Board(view.app)

const unit = new Unit(10, 10)
board.addUnit(unit)
console.log(unit.getMoves())
