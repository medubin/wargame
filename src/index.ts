import * as PIXI from 'pixi.js'

const app = new PIXI.Application(1000, 1000)
const element = document.getElementById('game')
element.appendChild(app.view)
