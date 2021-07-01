import React , { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { FirebaseContext } from '../../FirebaseContext'

GoogleSignin.configure({
    webClientId: '',
});

const index = ({ navigation }) => {

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);

    const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          console.log("revokeAccess", "signOut")
          setuserInfo({ user: null }); // Remember to remove the user from your app's state as well

        } catch (error) {
          console.error(error);
        }
      };

    const login = async () => {

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("userInfo", userInfo)
            setuserInfo({ userInfo });


        } catch (error) {

            console.log("error.code", error.code)

            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }

        }

    }
    

    return (
        <View>
            <Input
                placeholder='Email'
                leftIcon={{ type: 'typicons', name: 'mail' }}
            />

            <Input
                type="password"
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
            />
            <Button
                icon={{
                    name: "login",
                    size: 20,
                    color: "white"
                }}
                title="Connexion"
            />

            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={login}
             />
            
            <Button
                icon={{
                    name: "logout",
                    size: 20,
                    color: "white"
                }}
                title="Déconnexion"
                onPress={signOut}
            />
        </View>
    )
}

export default index
