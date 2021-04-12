import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import FormInput from '../components/loginscreen/FormInput';
import FormButton from '../components/loginscreen/FormButton';
import { apiUrl } from '../constants/apiurl';
import { saveItem, userLogout } from '../utils/PersistantAuth'
import { AuthContext } from '../navigation/RootNavigator'
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen({navigation}) {
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
                    context.setUser(data.email);
                    navigation.push('SetName',
                            {
                                email: email,
                                password: password
                            })
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
