import React, { useContext, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { FirebaseContext } from '../../FirebaseContext';

const index = ({route, navigation}) => {

    const {id} = route.params;

    const {queryOneContact} = useContext(FirebaseContext)
    console.log(queryOneContact)

    const [contactValue, setContactValue] = useState(null)

    const readOne = async () => {
        const contact = await queryOneContact(id)
        console.log("contact", contact.data())

        contact.exists && setContactValue(contact.data())
    }

    useEffect(() => {
        const cleanup = readOne()

        return () => {
            cleanup
        }
    }, [])

   

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{contactValue?.name}</Text>
        </View>
    )
}

export default index
