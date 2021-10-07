import { Component, createElement } from '../lib/react'
import { StyledSelect } from './select.js'


class Filters extends Component {
    render() {
        return StyledSelect({
            children: [
                createElement('option', { value: 'all' }, 'Todas'),
                createElement('option', { value: 'mostValued' }, 'Mas valoradas'),
                createElement('option', { value: 'leastValued' }, 'Menos valoradas'),
            ]
        })
    }
}

export {
    Filters,
}
