import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Icon from './Icon';
const ApiKey = require('../apikeys.json');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=' + ApiKey.TMDBApiKey +  '&page=1')
      .then((response) => response.json())
      .then(response => console.log(response))
      .then((response) => {this.setState({ data: response });})
      .catch((error) => console.error(error))
      .then(() => {
        this.setState({ isLoading: false });
      })
      .then(response => console.log(this.state))
  }

  render() {

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
}



