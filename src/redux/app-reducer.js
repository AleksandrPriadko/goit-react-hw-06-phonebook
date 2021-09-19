import { combineReducers } from "redux";
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "./app-types";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER_CONTACT:
      return payload;
    default:
      return state;
  }
};

//const store = createStore(reducer);

export default combineReducers({ items, filter });
