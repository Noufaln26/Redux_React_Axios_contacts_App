import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//actions
export const addContact = (contact) => {
  return {
    type: "CREATE_CONTACT",
    payload: contact,
  };
};

const initialState = { contacts: ["noufal"], counter: 0 };

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

const store = createStore(contactReducer, composeWithDevTools());

export default store;
