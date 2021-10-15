import { Component } from '../lib/react'
import { styled } from '../lib/styled-components.js'
import { Header } from './header.js'
import { Actions } from './actions.js'
import { Search } from './search.js'
import { Filters } from './filter.js'
import { MovieList } from './movie-list.js'


const AppStyled = styled.div``

class App extends Component {
    render() {
        return AppStyled({
            children: [
                new Header(),
                new Actions({
                    children: [
                        new Search(),
                        new Filters(),
                    ]
                }),
                new MovieList(),
            ]
        })
    }
}

export {
    App
}
