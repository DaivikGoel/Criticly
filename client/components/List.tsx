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
    console.log("HERE", this.state.data)
    const Icons = this.state.data.map((item) => {
      return (
        <Icon name = {item.name} posterpath = {item.poster_path} key ={item.id} payload = {item} />
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



