import { createStackNavigator } from '@react-navigation/stack';
import React,{createContext, useState, useEffect, useMemo} from 'react';
import AuthStack from './SignUpNavigator'
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import { readItem } from '../utils/PersistantAuth'


const Stack = createStackNavigator<RootStackParamList>();

type ContextProps = {
    user: string,
    setUser: Function, 
    isSignedIn: boolean,
    setisSignedIn: Function
};



export const AuthContext = createContext<ContextProps>({user: '', setUser: () => {}, isSignedIn: false, setisSignedIn: () => {} })

export default function RootNavigator() {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState('')
    const [isSignedIn, setisSignedIn] = useState(false)
    // Handle user state changes
    const value = useMemo(() => ({ user, setUser}), [user])
    useEffect(() => {
        async function fetchUser() {
            const value = await readItem()
            .then((name) => {
                if (name == null){
                    setisSignedIn(false)
                }
                else{
                    setUser(name)
                    setisSignedIn(true)
                }
            }
            )

        }
        fetchUser()
  
    }, [])


    return (
        isSignedIn ? (
        <AuthContext.Provider value={{user: user, setUser: setUser, isSignedIn: isSignedIn, setisSignedIn:setisSignedIn}}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
        </AuthContext.Provider>
        )
            :
            <AuthContext.Provider value={{ user: user, setUser: setUser, isSignedIn: isSignedIn, setisSignedIn: setisSignedIn }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignUp" component={AuthStack} />
            </Stack.Navigator>
        </AuthContext.Provider >
    );
}