import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { Text, View } from './Themed';
import Icon from './Icon';


//let url = 'http://localhost:3000/trending';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:
  {
    fontSize: 30
  }

});

export default class List extends Component<{name: string, url: string}, { data: Array<any>, isLoading: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((response) => { this.setState({ data: response.results }); })
      .catch((error) => console.error(error))
      .then(() => {
        this.setState({ isLoading: false });
      })
  }

  render() {
    const Icons = this.state.data.map((item) => {
      return (
        <Icon name = {item.name} posterpath = {item.poster_path} id ={item.id} payload = {item} />
      )
    })

  return (
    <View style = {styles.container}>
      <Text style ={styles.title}> {this.props.name} </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
        >
          {Icons}      
          </ScrollView>


    </View>
  );
}
}



