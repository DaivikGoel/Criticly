import { createStackNavigator } from '@react-navigation/stack';
import React,{createContext, useState, useEffect} from 'react';
import AuthStack from './SignUpNavigator'
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import { readItem } from '../utils/PersistantAuth'


const Stack = createStackNavigator<RootStackParamList>();

type ContextProps = {
    user: string,
    setUser: Function, 
    isSignedIn: boolean,
    setisSignedIn: Function,
    userid: string,
    setUserid: Function
    
};



export const AuthContext = createContext<ContextProps>({user: '', setUser: () => {}, isSignedIn: false, setisSignedIn: () => {}, userid:'', setUserid: () => {} })

export default function RootNavigator() {
	const [user, setUser] = useState('')
	const [isSignedIn, setisSignedIn] = useState(false)
	const [userid, setUserid] = useState('')
	// Handle user state changes
	useEffect(() => {
		async function fetchUser() {
			await readItem()
				.then((userid) => {
					if (userid == null){
						setisSignedIn(false)
					}
					else{
						setUserid(userid)
						setisSignedIn(true)
					}
				}
				)

		}
		fetchUser()
  
	}, [])


	return (
       
		<AuthContext.Provider value={{user: user, setUser: setUser, isSignedIn: isSignedIn, setisSignedIn:setisSignedIn, userid: userid, setUserid:setUserid }}>
			{isSignedIn ? 
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Root" component={BottomTabNavigator} />
				</Stack.Navigator>
			
				:
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="SignUp" component={AuthStack} />
				</Stack.Navigator>
			}
		</AuthContext.Provider >
	);
}