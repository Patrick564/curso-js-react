import { BURN } from "../actions";

const reducer = (state, { type, payload }, rest) => {
    switch (type) {
        case 'BURN':
            return [state + payload, rest - payload]
        default:
            return state
    }
}

export {
    reducer,
}
