import { render } from './lib/react-dom.js'
import { App } from './components/app.js'

const component = document.querySelector('.root')

render(new App(), component)
