import { createContext } from 'react';
import { ContextProps } from '../navigation/RootNavigator';




export const AuthContext = createContext<ContextProps>({ user: '', setUser: () => { }, isSignedIn: false, setisSignedIn: () => { }, userid: '', setUserid: () => { } });
