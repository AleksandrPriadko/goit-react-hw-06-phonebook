import { v4 as uuidv4 } from "uuid";
import { ADD_CONTACT } from "./app-types";

const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export { addContact };
