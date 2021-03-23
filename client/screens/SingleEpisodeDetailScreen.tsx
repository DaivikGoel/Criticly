import * as React from 'react';
import { Text, View } from '../components/Themed';
import {Image} from 'react-native-elements'
import ShowDetailContainer from '../components/ShowDetailContainer'
import { original_url } from '../constants/urls';
import { StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, ImageBackground} from 'react-native';
import EpisodeInfo from '../components/EpisodeInfo'
import Ratings from '../components/Ratings'
import TopReviews from '../components/TopReviews';
import CastAndCrew from '../components/CastAndCrew';

const ApiKey = require('../apikeys.json');

export default function SingleEpisodeDetailScreen({ route }) {

  
    const { episodeinfo,seasoninfo, showid} = route.params;
    console.log("EINFO", episodeinfo)
    console.log("SINFO", seasoninfo)
    console.log(showid)
    let episodedetailsurl = 'https://api.themoviedb.org/3/tv/' + showid + '/season/' + seasoninfo.season_number + '/episode/' + episodeinfo.episode_number + '/credits' + '?api_key=' + ApiKey.TMDBApiKey;
    

    return (
        <View style={styles.child}>
            <ScrollView > 
                    <EpisodeInfo episodeinfo={episodeinfo} seasonposterurl={original_url + seasoninfo.poster_path } />
                    <Ratings/>
                    <TopReviews/>
                    <CastAndCrew url ={episodedetailsurl}/> 
            </ScrollView>
        </View>
    );
  }

  const styles = StyleSheet.create({
      imgContainer: {
          width: '100%', height: '100%',

      },
    child: {
        flex: 1,
        backgroundColor: 'rgb(0,0,0)',
      },

});

