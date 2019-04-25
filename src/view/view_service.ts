import * as PIXI from 'pixi.js'
import Constant from './constants'

export default class ViewService {
  public app : PIXI.Application
  constructor(element : HTMLElement) {
    this.app = new PIXI.Application({
      width: Constant.SQUARE * Constant.WIDTH + 1,
      height: Constant.SQUARE * Constant.HEIGHT + 1,
      antialias: true,
    })
    element.appendChild(this.app.view)
  }
}
