import { Component, createElement } from '../lib/react'
import { WrapperStyled } from './wrapper.js'


class Actions extends Component {
    render() {
        const { children } = this.props

        return WrapperStyled({
            children: createElement('div', {
                class: 'actions',
                children,
            })
        })
    }
}

export {
    Actions
}
