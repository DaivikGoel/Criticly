import * as React from 'react';
import { Text, View } from '../components/Themed';
import {Image} from 'react-native-elements'
import ShowDetailContainer from '../components/ShowDetailContainer'
import { original_url } from '../constants/urls';
import { StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, ImageBackground} from 'react-native';
import EpisodeInfo from '../components/EpisodeInfo'

export default function SingleEpisodeDetailScreen({ route }) {

  
    const { episodeinfo,seasoninfo } = route.params;
    console.log("EINFO", episodeinfo)
    console.log("SINFO", seasoninfo)

    return (
    <ImageBackground style={styles.imgContainer} source={{ uri: original_url + seasoninfo.poster_path }}>
        <View style={styles.child}>
            <ScrollView > 
            <EpisodeInfo payload ={episodeinfo}/>
            </ScrollView>
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

