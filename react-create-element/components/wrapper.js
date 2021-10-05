import { Component, createElement } from '../lib/react'

class Wrapper extends Component {
    render() {
        const { children } = this.props

        return createElement('div', {
            class: 'wrapper',
            children,
        })
    }
}

export {
    Wrapper
}
