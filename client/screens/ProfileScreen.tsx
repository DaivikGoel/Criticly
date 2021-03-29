import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import {test_image} from '../constants/urls';
import ProfileInfo from '../components/profilescreen/ProfileInfo'


export default function ProfileScreen() {

  const personid = 10 

  return (
    <ProfileInfo personid = {personid}/>
  );
}