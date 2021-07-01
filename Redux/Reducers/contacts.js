import { ADD_CONTACT, DEL_CONTACT, UP_CONTACT } from "../Actions/types";

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
        
        case UP_CONTACT:
            // 1. JE BOUCLE SUR LA LISTE DES CONTACTS
            const newData = state.map(contact => {
                // 2. SI TU RETROUVES UN CONTACT QUI PORTE L'ID DU PAYLOAD ALORS CHANGE LE CONTENU DU CONTACT
                if(contact.id === action.payload.id) {
                    return action.payload
                }

                return contact 
            })

            console.log('UP_CONTACT', action.payload)

            return newData
            break;
    
        default:
            return state
            break;
    }

}

export default contacts
