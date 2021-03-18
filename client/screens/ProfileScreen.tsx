import * as React from 'react';
import { StyleSheet } from 'react-native';

import List from '../components/List';
import { Text, View } from '../components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Username </Text>
      <Text style={styles.bio}> This will be the bio text, put some limit of like 300 characters or something</Text>
      <Text style={styles.header}>My favourites</Text>
      <Text style={styles.header}>Activity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width:'100%',
    height:'100%'
  }
});
