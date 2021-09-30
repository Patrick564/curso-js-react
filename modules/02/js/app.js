import { store } from './store.js'
import { BURN } from './actions'

store.subscribe(() => {
    window.result.textContent = `Haz quemado ${store.getState()} calorías`
    window.rest.textContent = `Te quedan ${store.getRest()} calorías por quemar`
})

const burn = () => {
    store.dispatch({
        type: BURN,
        payload: 1.42,
    })
}

window.burn.addEventListener('click', burn)
