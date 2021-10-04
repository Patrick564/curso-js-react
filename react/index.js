import { render } from './lib/react-doom.js'
import { App } from './components/app.js'

const container = document.querySelector('#root')

render(new App(), container)
