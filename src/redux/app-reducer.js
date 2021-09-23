import { combineReducers } from "redux";
import { addContact, deleteContact, changeFilter } from "./app-actions";
import { createReducer } from "@reduxjs/toolkit";
//console.log([addContact]);
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];
//     case DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };
const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case FILTER_CONTACT:
//       return payload;
//     default:
//       return state;
//   }
// };

//const store = createStore(reducer);

export default combineReducers({ items, filter });
