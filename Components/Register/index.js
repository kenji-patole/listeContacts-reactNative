import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import { FirebaseContext } from '../../FirebaseContext';

const index = ({navigation}) => {

    const {auth, queryAddUser} = useContext(FirebaseContext)

    const [email, setEmail] = useState("test@dope.com")
    const [password, setPassword] = useState("123456")

    const inscription = async () => {

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await queryAddUser(user.uid, {email:user.email, date:Date.now()})

        } catch(err) {
            
            console.log(err)
        }  

        console.log("inscription", email, password)
    
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
                title="Inscrivez-vous"
                onPress={inscription}
                buttonStyle={{
                    marginBottom: 50
                }}
            />

            <Button
                title="Connexion"
                onPress={() => navigation.navigate('Login')}
            />
        
            
        </View>
    )
    

}

export default index
