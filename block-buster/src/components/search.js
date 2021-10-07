import { Component, createElement } from '../lib/react'
import { styled } from '../lib/styled-components.js'
import { StyledForm } from './form.js'
import { StyledInput } from './input.js'
import { StyledButton } from './button.js'


class Search extends Component {
    render() {
        return StyledForm({
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
