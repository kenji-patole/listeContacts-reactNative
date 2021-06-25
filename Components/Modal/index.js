import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Overlay, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { afficheModal } from '../../Redux/Actions/modal';
import { addContact } from '../../Redux/Actions/contact'

const index = () => {

    const {modal, contacts} = useSelector(state => state)
    const dispatch = useDispatch()

    const [name, setName] = useState("")


    const toggleOverlay = () => {
        dispatch(afficheModal({visible:!modal.visible}))
        setName("")
    };

    const handleChangeName = (name) => {
        setName(name)
    }

    const saveName = () => {
        
       dispatch(addContact(

        {   
            id:contacts.length + 1,
            name,
            avatar_url: 'https://icon-library.net/images/anonymous-avatar-icon/anonymous-avatar-icon-10.jpg',
            subtitle: 'nc'
        },


       )) 

       toggleOverlay()

        console.log("name", name)
    }
    
    

    return (

        <Overlay 
            isVisible={modal.visible} 
            onBackdropPress={toggleOverlay}
            overlayStyle = {styles.overlayStyle}>
            <Text style={styles.title} h4>Ajouter un contact !</Text>

            <Input
                placeholder='Ex Dope Boy'
                onChangeText={handleChangeName}
            />
            <View style={styles.button}>
                <Button
                    title="Enregistrer"
                    type="outline"
                    onPress={saveName}
                />
            </View>
        </Overlay>
        
    )
}

export default index

const styles = StyleSheet.create({
    
    overlayStyle:{
        width:300
    },

    title:{paddingHorizontal:10,
            paddingVertical:30
          },

    button:{
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingBottom: 20
    }
    
    
})
