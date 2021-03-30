import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Text, View } from 'react-native';
import Icon from './Icon';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  title:
  {
    fontSize: 30, 
    color: 'white'
  }

});

export default class List extends Component<{name: string, url: string, type: string}, { data: Array<any>, isLoading: boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((response) => {
        switch(this.props.type){
        case 'tv':
          this.setState({ data: response.results }); 
            break;
        case 'cast':
            this.setState({ data: response.cast });
            break;
        case 'crew':
            this.setState({ data: response.crew });
            break;
        default:
          this.setState({ data: response.results });
          break;

        }
      }
        )
      .catch((error) => console.error(error))
      .then(() => {
        this.setState({ isLoading: false });
      })
  }

  render() {

    const Icons = this.state.data.sort(function (a, b) { return b.popularity - a.popularity; }).map((item) => {
      return (
        <Icon name = {item.name} posterpath = {item.poster_path} key ={item.id} payload = {item} showid ={item.id} />
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
          style = {{backgroundColor: 'transparent'}}
        >
          {Icons}    
          </ScrollView>


    </View>
  );
}
}



