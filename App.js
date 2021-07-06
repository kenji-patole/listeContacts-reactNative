import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { FirebaseContext } from './FirebaseContext';


import Login from './Components/Login';
import Register from './Components/Register';
import Secure from './Components/Secure';


const Stack = createStackNavigator();


const  App = () => {

  const {auth} = useContext(FirebaseContext)
  const [user, setUser] = useState(null)
  


  useEffect(() => {

    // dispatch(addNavigation())

    const authChange = auth.onAuthStateChanged(userAuth => {

        setUser(userAuth)
        console.log("user :", userAuth)
    })


    return () => {
      authChange
    }

  }, [])


  return (
    <NavigationContainer>
      
        { 
          user ? <>
          <Secure/>
          </>
          :
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Register" component={Register} /> 
          </Stack.Navigator>
        }
      
    </NavigationContainer>
  );

}


export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  
})
