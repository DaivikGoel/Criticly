import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Icon from './Icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

const List = () => {
  return (
    <View style = {styles.container}>
      <Text> List Title </Text>
      <ScrollView 
      horizontal={true}
      //contentContainerStyle={{ width: `${100 * intervals}%` }}
      //showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
      pagingEnabled
      >
        <Icon/>
        <Icon/>
        <Icon/>
        <Icon/>
      
      </ScrollView>
    </View>
  );
}

export default List;


