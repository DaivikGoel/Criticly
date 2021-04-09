import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import FormInput from '../components/loginscreen/FormInput';
import FormButton from '../components/loginscreen/FormButton';
import { apiUrl } from '../constants/apiurl';
import { saveItem, userLogout } from '../utils/PersistantAuth'
import { AuthContext } from '../navigation/RootNavigator'


export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = React.useContext(AuthContext);

    function signup() {
        fetch(apiUrl + 'signup?email=' + email + '&password=' + password)
            .then(async (response) => {
                if(response.status == 404)
                    Alert.alert('There has been an error')
                else if (response.status == 200){
                    var data = await response.json()
                    saveItem(data.email)
                    context.setUser(data.email)
                    context.setisSignedIn(true)


                }


            }
            )

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
            <FormInput
                value={email}
                placeholderText='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
            />
            <FormInput
                value={password}
                placeholderText='Password'
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}
            />
            <FormButton buttonTitle='Signup' onPress={() => signup()} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        marginBottom: 10
    }
});