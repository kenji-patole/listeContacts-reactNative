import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import { FirebaseContext } from '../../FirebaseContext';

const index = ({navigation}) => {

    const {auth} = useContext(FirebaseContext)

    const [email, setEmail] = useState("test@dope.com")
    const [password, setPassword] = useState("123456")

    const connexion = () => {

        try {
            auth.signInWithEmailAndPassword(email, password)
            console.log("connexion", email, password)

        } catch (error) {
            console.log(error.message)
        }
        
    }

    const logOut = () => {
        auth.signOut()
    }
    
    

    return (
        <View>
            <Input
                placeholder='Email'
                onChangeText={setEmail}
                value={email}
            />
            <Input
                placeholder='Mot de passe'
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
            />
            <Button
                title="Connexion"
                onPress={connexion}
                buttonStyle={{
                    marginBottom: 50
                }}
            />
            <Button
                title="Inscription"
                onPress={() => navigation.navigate('Register')}
                buttonStyle={{
                    marginBottom: 50
                }}
            />
            <Button
                title="LogOut"
                onPress={logOut}
            />
        </View>
    )
}

export default index
