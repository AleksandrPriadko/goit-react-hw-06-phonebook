import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/app-reducer";

//const rootReducer = combineReducers({ contacts: appReducer });

//const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: { contacts: appReducer },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
