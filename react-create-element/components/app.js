import { Component, createElement } from '../lib/react'
import { User } from './user.js'
import { Wrapper } from './wrapper.js'
import { User as UserStyled } from './user-styled.js'


class App extends Component {
    render() {
        return createElement('div', {
            class: 'app',
            children: new Wrapper({
                children: [
                    new User({
                        name: 'Ash',
                        avatar: './images/ash.jpg',
                        age: 10,
                    }),
                    new UserStyled({
                        name: 'Ash',
                        avatar: './images/ash.jpg',
                        age: 10,
                    })
                ]
            })
        })
    }
}

export {
    App
}
