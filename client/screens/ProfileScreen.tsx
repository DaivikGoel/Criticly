import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import {test_image} from '../constants/urls';
import ProfileInfo from '../components/profilescreen/ProfileInfo'
import { AuthContext } from '../navigation/RootNavigator'

export default function ProfileScreen() {
  const context = React.useContext(AuthContext);
  const personid = context.userid

  return (
      <ProfileInfo personid = {personid}/>
  );
}