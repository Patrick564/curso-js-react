import movies from './movies.js'
import { renderMovieList } from './render.js'

const $button = window.recommended

$button.addEventListener('click', () => {
    renderMovieList(setRecommendedMovies(movies))
})

function setRecommendedMovies(movies) {
    return movies.map((movie, index) => {
        return { ...movie, recommended: movie.vote_average > 7 }
    })
}
