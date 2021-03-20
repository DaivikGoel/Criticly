import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import {test_image} from '../constants/urls';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: test_image}} 
        style={styles.displayPic} 
      />
      <Text style={styles.header}>Username </Text>
      <Text style={styles.bio}> This will be the bio text, put some limit of like 300 characters or something</Text>
      <Text style={styles.header}>My favourites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayPic: {
    width: 100, 
    height: 100, 
    borderRadius: 400/ 2
  },
  header:{
    paddingTop:'15%',
    fontSize:30
  },
  bio:{
    paddingTop:'15%',
    fontSize:30
  },
  container:{
    backgroundColor:'purple',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  }
});
