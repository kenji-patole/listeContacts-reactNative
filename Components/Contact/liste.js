import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {styles} from './styles'
import ContactItem from './contactItem';
import { useSelector, useDispatch } from 'react-redux';


const Liste = () => {

  const {contacts} = useSelector(state => state)
  

  return (
    
    <FlatList
        data={contacts}
        ListEmptyComponent={() => <Text>Vous n'avez pas de contacts</Text>}
        renderItem={({item}) => <ContactItem item={item} />}
        keyExtractor={item => item.id}
    />
    
  );
}



export default Liste;