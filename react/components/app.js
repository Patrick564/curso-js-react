import { Component } from '../lib/react.js'
import { User } from './user.js'
import { Wrapper } from './wrapper.js'
import { User as UserStyled } from './user-styled.js'

class App extends Component {
    render() {
        return `
            <div class="app">
                ${new Wrapper({
                    children: `
                        <h1>React.js 🕸🕸🕸🕸🕸</h1>
                        
                        ${new User({
                            name: 'Ash',
                            avatar: './images/ash.jpg'
                        }).render()}
                        
                        ${new UserStyled({
                            name: 'Ash Ketchum Styled',
                            avatar: './images/ash.jpg'
                        }).render()}
                    `
                }).render()}
            </div>
        `
    }
}

export {
    App
}
