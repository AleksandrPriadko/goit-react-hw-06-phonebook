import { combineReducers } from "redux";
import { ADD_CONTACT } from "./app-types";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => state;

//const store = createStore(reducer);

export default combineReducers({ items, filter });

// addNewContact = (data) => {
//   const { name, number } = data;
//   const { contacts } = this.state;
//   const newContact = {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   };
//   if (contacts.some((contact) => contact.name === name)) {
//     alert(`${name} is already in contacts!`);
//   } else {
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   }
// };
