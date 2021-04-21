import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import TheSearchBarContainer from '../components/searchscreen/TheSearchBarContainer'

export default function SearchScreen() {
  return (
    <View >
      <TheSearchBarContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
