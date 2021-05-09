import { createStackNavigator } from '@react-navigation/stack';
import React,{useState, useEffect} from 'react';
import AuthStack from './SignUpNavigator'
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import { readItem } from '../utils/PersistantAuth'
import { AuthContext } from '../constants/AuthContext';


const Stack = createStackNavigator<RootStackParamList>();

export type ContextProps = {
    user: string,
    setUser: Function, 
    isSignedIn: boolean,
    setisSignedIn: Function,
    userid: string,
    setUserid: Function
    
};



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