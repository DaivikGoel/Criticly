import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AuthStack from './SignUpNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { AuthContext } from './AuthProvider';
import LinkingConfiguration from './LinkingConfiguration';

export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);
    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
        setLoading(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            {user ? <BottomTabNavigator /> : <AuthStack />}
        </NavigationContainer>
    );
}