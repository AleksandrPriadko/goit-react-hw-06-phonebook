import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "../redux/app-reducer";

const rootReducer = combineReducers({ contacts: appReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
