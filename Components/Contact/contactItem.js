import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar, Button } from 'react-native-elements'

const ContactItem = ({item}) => {

    return (
        <ListItem.Swipeable 
            rightContent={
            <Button
              title="Delete"
              icon={{ name: 'delete', color: 'white' }}
              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
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
