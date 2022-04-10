import axios from "axios";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mockjson } from "./assets/Mockjson";




//actions
export const addContact = (contact) => {
  return {
    type: "CREATE_CONTACT",
    payload: contact,
  };
};

export const fetchContact= () =>{
    return (dispatch) => {
        return axios.get("https://randomuser.me/api/?results=2")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: "ADD_FETCHED_DATA",
                    payload: data.results
                })
            })
            .catch(error => {
                throw (error);
            });
    };
} 



const data = mockjson.results;
const initialState = { data, counter: 0 };

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
          ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "ADD_FETCHED_DATA":
        return {
            contacts: [...action.payload]
        }
    default:
      return state;
  }
};

const store = createStore(contactReducer, composeWithDevTools());

export default store;
