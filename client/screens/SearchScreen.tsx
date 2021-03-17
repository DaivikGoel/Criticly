import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import TheSearchBarPage from '../components/TheSearchBarPage'

export default function SearchScreen() {
  return (
    <View >
      <TheSearchBarPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
