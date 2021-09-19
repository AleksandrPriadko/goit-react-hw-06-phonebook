import { v4 as uuidv4 } from "uuid";
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "./app-types";

const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: FILTER_CONTACT,
  payload: value,
});

export { addContact, deleteContact, changeFilter };
