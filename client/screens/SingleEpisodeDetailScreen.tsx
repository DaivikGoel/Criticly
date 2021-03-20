import * as React from 'react';
import { Text, View } from '../components/Themed';
import { ImageBackground} from 'react-native';
import {Image} from 'react-native-elements'
import EpisodeDetailContainer from '../components/EpisodeDetailContainer'
import { original_url } from '../constants/urls';
import { StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';


export default function SingleEpisodeDetailScreen({ route }) {

  
    const { payload } = route.params;
    console.log(payload)

    return (
        <View>
            <Text>text for the particular episode</Text>
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

