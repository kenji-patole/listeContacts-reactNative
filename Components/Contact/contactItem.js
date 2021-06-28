import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar, Button } from 'react-native-elements'
import { FirebaseContext } from '../../FirebaseContext';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from '../../Redux/Actions/contact';




const ContactItem = ({item}) => {

    const {queryDeleteContact} = useContext(FirebaseContext)

    const {contacts} = useSelector(state => state)
    const dispatch = useDispatch()


    const supprimer = (id) => {
        console.log("delete", id)

        queryDeleteContact(id);

    }

   
    return (
        <ListItem.Swipeable 
            rightContent={
            <Button
              title="Delete"
              icon={{ name: 'delete', color: 'white' }}
              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
              onPress={() => supprimer(item.id)}
            />
          }
        
        bottomDivider>
            <Avatar source={{uri: item.avatar_url}} />
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem.Swipeable>
    )
}

export default ContactItem

const styles = StyleSheet.create({})
