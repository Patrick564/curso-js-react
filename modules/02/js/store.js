import {createStore} from "./redux";
import {reducer} from "./reducers";

const store = createStore(reducer, 0, 1931999.46)

export {
    store,
}
