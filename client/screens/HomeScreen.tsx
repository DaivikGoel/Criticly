import * as React from 'react';
import { StyleSheet, ScrollView} from 'react-native';

import List from '../components/List';
import { Text, View } from '../components/Themed';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <ScrollView style = {styles.scrollstyle}>
      <List/>
      <List />
      <List />
      <List />
      <List />
      <List />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  scrollstyle: {
    marginTop: 50
  }
});
