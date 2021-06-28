import { ADD_CONTACT, DEL_CONTACT } from "../Actions/types";

const initStateContact = []

const contacts = (state = initStateContact, action) => {
    console.log(action)

    switch (action.type) {

        case ADD_CONTACT:
            return [...state, action.payload];
            break;
        
        case DEL_CONTACT:
           const newContacts = state.filter(contact => contact.id != action.payload)
            return newContacts 
            
            // return action.payload;
            break;
    
        default:
            return state
            break;
    }

}

export default contacts
