import * as React from 'react';
import { Text, View } from '../components/Themed';
import { ImageBackground} from 'react-native';
import {Image} from 'react-native-elements'
import EpisodeDetailPage from '../components/EpisodeDetailPage'
import { original_url } from '../constants/urls';
import { StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';


export default function ShowDetailScreen({ route }) {

  
    const { payload } = route.params;
    console.log(payload)

    return (
    <ImageBackground style={styles.imgContainer} source={{ uri: original_url + payload.backdrop_path  }}>
        <View style={styles.child}>
          <EpisodeDetailPage payload ={payload}/>
        </View>
    </ImageBackground>
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

