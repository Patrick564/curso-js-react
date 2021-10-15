import { Component, createElement } from '../lib/react'
import { styled } from '../lib/styled-components.js'
import { StyledForm } from './form.js'
import { StyledInput } from './input.js'
import { StyledButton } from './button.js'
import { SEARCH_MOVIE, SET_FILTER } from '../actions'
import { store } from '../store.js'


class Search extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const query = formData.get('title')

        if (query) {
            return store.dispatch({
                type: SEARCH_MOVIE,
                payload: query,
            })
        }

        return store.dispatch({
            type: SET_FILTER,
            payload: 'all',
        })
    }

    render() {
        return StyledForm({
            onSubmit: this.handleSubmit,
            children: [
                StyledInput({
                    placeholder: 'Escribe tu película favorita',
                    name: 'title',
                    type: 'text'
                }),
                StyledButton(null, 'Buscar'),
            ]
        })
    }
}

export {
    Search,
}
