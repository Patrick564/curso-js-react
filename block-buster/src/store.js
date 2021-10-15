import { createStore } from "./redux";
import { reducer } from "./reducers";
import movies from '../movies.js'
import { getAllIds, getLeastValuedIds, getMostValuedIds, movieListAsMap } from './normalize.js'


const initialState = {
    movieList: movieListAsMap(movies),
    filter: 'all',
    list: {
        all: getAllIds(movies),
        mostValue: getMostValuedIds(movies),
        leastValued: getLeastValuedIds(movies),
    }
}
const store = createStore(reducer, initialState)

export {
    store,
}
