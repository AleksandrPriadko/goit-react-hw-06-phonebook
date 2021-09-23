import { v4 as uuidv4 } from "uuid";
//import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "./app-types";
import { createAction } from "@reduxjs/toolkit";
//console.log(createAction());

// const addContact = (data) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: DELETE_CONTACT,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: FILTER_CONTACT,
//   payload: value,
// });

const addContact = createAction("app/addContacts", (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

const deleteContact = createAction("app/deleteContacts");
const changeFilter = createAction("app/filterContacts");

export { addContact, deleteContact, changeFilter };
