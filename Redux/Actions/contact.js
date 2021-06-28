import {ADD_CONTACT, DEL_CONTACT} from './types'

export const addContact = (payload) => ({
    type: ADD_CONTACT,
    payload
})

export const delContact = (payload) => ({
    type: DEL_CONTACT,
    payload
})