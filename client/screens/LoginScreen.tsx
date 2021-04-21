import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import FormInput from '../components/loginscreen/FormInput';
import FormButton from '../components/loginscreen/FormButton';
import { apiUrl } from '../constants/apiurl';
import {saveItem} from '../utils/PersistantAuth'
import {AuthContext} from '../navigation/RootNavigator'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = React.useContext(AuthContext);

    
    function login(){
        fetch(apiUrl + 'login?email=' + email + '&password='+ password)
            .then(async (response) => {
                if (response.status == 404)
                    Alert.alert('There has been an error')
                else if (response.status == 200) {
                    var data = await response.json()
                    context.setUser(data.email)
                    fetch(apiUrl + 'getuserid?email=' + email)
                        .then(async (response) => {
                            var data = await response.json()
                            data = data[0]
                            const id = data.id
                            saveItem(JSON.stringify(id))
                            context.setUserid(data.id)
                            context.setisSignedIn(true)
                        }
                        )
                }
            }
            )


    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Criticly</Text>
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
            <FormButton buttonTitle='Login' onPress={() => login()} />
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.navButtonText}>New user? Join here</Text>
            </TouchableOpacity>
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
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 20,
        color: '#6646ee'
    }
});

