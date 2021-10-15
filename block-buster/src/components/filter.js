import { Component, createElement } from '../lib/react'
import { StyledSelect } from './select.js'
import { store } from '../store.js'
import { SET_FILTER } from '../actions'


class Filters extends Component {
    handleChange = (event) => {
        store.dispatch({
            type: SET_FILTER,
            payload: event.target.value
        })
    }

    render() {
        return StyledSelect({
            onChange: this.handleChange,
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
