import { combineReducers, createStore } from "redux";
import dataReducer from "./reducers/dataReducer";
import { composeWithDevTools } from "@redux-devtools/extension";


const rootReducer = combineReducers({
    data: dataReducer,
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers())

export default store;