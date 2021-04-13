import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SetNameScreen from '../screens/SetNameScreen';

const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen name='Signup' component={SignUpScreen} />
            <Stack.Screen name='SetName' component={SetNameScreen} />
        </Stack.Navigator>
    );
}