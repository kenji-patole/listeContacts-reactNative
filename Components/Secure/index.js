import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FirebaseContext } from '../../FirebaseContext';
import { addContact, delContact, updateContact } from '../../Redux/Actions/contact'
import { useDispatch } from 'react-redux';

import Header from '../Header';
import Contact from '../Contact';
import SpeedDial from '../SpeedDial';
import Modal from '../Modal';
import Compte from '../Compte';
import Detail from '../Detail';


const initContacts = (queryAllContact, dispatch) => {

  return queryAllContact.onSnapshot(snapshot => {

    snapshot.docChanges().forEach((change) => {
      
        if (change.type === "added") {
          dispatch(
            addContact({
              id:change.doc.id, ...change.doc.data()
            })
          )
        }
        
        if (change.type === "modified") {
          
          dispatch(
            updateContact({
                id:change.doc.id, ...change.doc.data()
            })
          )
            console.log("Modified city: ", change.doc.data());
        }

        if (change.type === "removed") {

          dispatch(delContact(change.doc.id))
          
        }

    });
   
  })
  
}


const Home = () => {

  const {queryAllContact} = useContext(FirebaseContext);
  console.log(queryAllContact)


  const dispatch = useDispatch()

  useEffect(() => { 
    // INIT CONTACT
    const unSubContacts = initContacts(queryAllContact, dispatch)
    

    return () => {
      // unSub Init Contact
      unSubContacts

    }

  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Contact/>
      <SpeedDial/>
      <Modal/>

    </SafeAreaView>
  )
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {

  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

const  index = () => {

 
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Compte" component={Compte} /> 
    </Tab.Navigator>

  );

}


export default index


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  
})
