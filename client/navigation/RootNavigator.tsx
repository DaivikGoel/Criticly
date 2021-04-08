import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import AuthStack from './SignUpNavigator'
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';


const AuthContext = React.createContext(false);
const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    const isSignedin = true
    return (
        isSignedin ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
        )
            :
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignUp" component={AuthStack} />
            </Stack.Navigator>
    );
}