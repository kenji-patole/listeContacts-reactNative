import { ADD_CONTACT } from "../Actions/types";

const initStateContact = []

const contacts = (state = initStateContact, action) => {
    console.log(action)

    switch (action.type) {

        case ADD_CONTACT:
            return [...state, action.payload];
            break;
    
        default:
            return state
            break;
    }

}

export default contacts
