import React, { useContext, useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Header from './Components/Header';
import Contact from './Components/Contact';
import SpeedDial from './Components/SpeedDial';
import Modal from './Components/Modal';
import { FirebaseContext } from './FirebaseContext';
import { addContact, delContact } from './Redux/Actions/contact'
import { useDispatch } from 'react-redux';


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
            console.log("Modified city: ");
        }
        if (change.type === "removed") {

          dispatch(delContact(change.doc.id))
          
        }

    });
   
  })
}


const App = () => {

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


export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  
})
