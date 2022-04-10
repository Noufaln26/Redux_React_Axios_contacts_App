import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

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
                    type: ADD_FETCHED_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
}




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
