import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Icon from './Icon';
const ApiKey = require('../apikeys.json');
let url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=' + ApiKey.TMDBApiKey + '&page=1';
//let url = 'http://localhost:3000/trending';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

export default class List extends Component<{}, { data: Array<any>, isLoading: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    console.log("LOGGING")
    fetch(url)
      .then((response) => response.json())
      .then((response) => { this.setState({ data: response.results }); })
      .catch((error) => console.error(error))
      .then(() => {
        this.setState({ isLoading: false });
      })
      .then(response => console.log(this.state))
  }

  render() {
    const Icons = this.state.data.map((item) => {
      return (
        <Icon name = {item.name} posterpath = {item.poster_path}/>
      )
    })

  return (
    <View style = {styles.container}>
      <Text> Trending </Text>
      <ScrollView 
      horizontal={true}
      //contentContainerStyle={{ width: `${100 * intervals}%` }}
      //showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
      pagingEnabled
      >
        {Icons}
      </ScrollView>
    </View>
  );
}
}



