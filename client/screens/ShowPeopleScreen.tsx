import * as React from 'react';
import { Text, View } from '../components/Themed';
import { ImageBackground} from 'react-native';
import {Image} from 'react-native-elements'
import ShowDetailContainer from '../components/ShowDetailContainer'
import { original_url } from '../constants/urls';
import { StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';


export default function ShowPeopleScreen({ route }) {

  
    const { person } = route.params;
    console.log(person)
    return (
        <View style={styles.child}>
          <Text> {person.name}</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    imgContainer: {
        width: '100%', height:'100%',

    },
    child: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },

});

