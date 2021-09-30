const createStore = (reducer, initialState, rest) => {
    let restCalories = rest
    let state = initialState
    let updater = () => {
    }

    const getState = () => {
        return state
    }

    const getRest = () => {
        return restCalories
    }

    const dispatch = (action) => {
        [state, restCalories] = reducer(state, action, restCalories)
        updater()
    }

    const subscribe = (listener) => {
        updater = listener
    }

    return {
        getState,
        dispatch,
        subscribe,
        getRest,
    }
}

function combineReducers() {}

export {
    createStore,
    combineReducers,
}
