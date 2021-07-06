import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { ListItem, Avatar, Button } from 'react-native-elements'
import { FirebaseContext } from '../../FirebaseContext';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from '../../Redux/Actions/contact';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { useNavigation } from '@react-navigation/native';




const ContactItem = ({item}) => {

    const {queryDeleteContact, queryUpdateContact, storageImg, storageGetImg} = useContext(FirebaseContext)

    const {contacts} = useSelector(state => state)
    const dispatch = useDispatch()

    const [loadingImg, setLoadingImg] = useState(false)

    const navigation = useNavigation()

    const color = item.favoris === true ? 'red': '#00aced';

    const supprimer = (id) => {
        queryDeleteContact(id);
    }

    const favoris = () => {
        console.log('favoris', item.id)

        queryUpdateContact(item.id, {favoris:!item.favoris})  
    }

    const editImg = () => {
        
        console.log("editImg", item.id) 

        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        };

        launchCamera(options, (response) => {
            console.log('Response = ', response);

            if(response.assets != undefined) {
                // BLOC D'INSTRUCTIONS
                setLoadingImg(true)

                const {uri} = response.assets[0];
                console.log("uri =", uri)

                storageImg(item.id, "dope.jpg", uri).then(res => {
                    console.log(res)
                    storageGetImg(item.id, "dope.jpg").then(url => {
                        queryUpdateContact(item.id, {
                            avatar_url: url
                        })
                        setLoadingImg(false)
                    })
                })

                
            }

        })
        
    }
    

   
    return (
        <ListItem.Swipeable 
            onPress={() => navigation.navigate('Detail', {id:item.id})}
            rightContent={
            <Button
              title="Delete"
              icon={{ name: 'delete', color: 'white' }}
              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
              onPress={() => supprimer(item.id)}
            />
          }
        
        bottomDivider>
           
                {
                    loadingImg ? <ActivityIndicator size="large" color="red" /> :  
                    <Avatar 
                        source={{uri: item.avatar_url}}
                        onPress={editImg} 
                    />
                }

            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon 
                name="star"
                onPress={favoris}
                color={color}
                size={30}
            />
        </ListItem.Swipeable>
    )
}

export default ContactItem

const styles = StyleSheet.create({})
