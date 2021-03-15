import { createStore, combineReducers } from "redux";
import weatherReducer from "./reducer";

const rootReducer = combineReducers({
    weatherReducer: weatherReducer,
});

const store = createStore(rootReducer);

export default store;
