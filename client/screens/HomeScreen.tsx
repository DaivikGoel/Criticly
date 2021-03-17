import * as React from 'react';
import { StyleSheet, ScrollView} from 'react-native';

import List from '../components/List';
import { Text, View } from '../components/Themed';
const ApiKey = require('../apikeys.json');

let lists = [["Trending", 'https://api.themoviedb.org/3/trending/tv/day?api_key=' + ApiKey.TMDBApiKey + '&page=1'], ["Top Rated", 'https://api.themoviedb.org/3/tv/top_rated?api_key=' + ApiKey.TMDBApiKey + '&page=1'], ["Popular", 'https://api.themoviedb.org/3/tv/popular?api_key=' + ApiKey.TMDBApiKey + '&page=1'] ];


export default function HomeScreen() {
  
  const Lists = lists.map((item) => {
    return (
      <List name={item[0]} url={item[1]} />
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
    justifyContent:'space-evenly'
  },
  scrollstyle: {
    marginTop: 50
  }
});
