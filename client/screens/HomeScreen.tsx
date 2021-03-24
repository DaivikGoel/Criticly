import * as React from 'react';
import { StyleSheet, ScrollView} from 'react-native';

import List from '../components/List';
import { Text, View } from '../components/Themed';
import {trending_url, topRated_url, popular_url} from '../constants/urls'
const ApiKey = require('../apikeys.json');

let lists = [["Trending", trending_url + ApiKey.TMDBApiKey + '&page=1'], 
["Top Rated", topRated_url + ApiKey.TMDBApiKey + '&page=1'], 
["Popular", popular_url + ApiKey.TMDBApiKey + '&page=1'] ];


export default function HomeScreen() {
  
  const Lists = lists.map((item) => {
    return (
      <List name={item[0]} url={item[1]} type ='tv' key={item[0]}/>
    )
  })
  return (
    <View style={styles.container}>
    <ScrollView style = {styles.scrollstyle}>
      {Lists}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-evenly',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  scrollstyle: {
    marginTop: 50
  }
});
