import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Header from './Components/Header';
import Contact from './Components/Contact';
import SpeedDial from './Components/SpeedDial';
import Modal from './Components/Modal';


const App = () => {
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
