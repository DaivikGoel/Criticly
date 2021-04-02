import * as React from 'react';
import { Text, View } from '../components/Themed';
import { ImageBackground} from 'react-native';
import {Button} from 'react-native-elements'
import List from '../components/common/List'
import { original_url, people_url} from '../constants/urls';
import { StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';
import ReviewContainer from '../components/reviewscreen/ReviewContainer';
import EpisodeInfo from '../components/episodedetail/EpisodeInfo';
import ReviewCard from '../components/reviewscreen/ReviewCard';
import ReviewComments from '../components/fullreviewscreen/ReviewComments';
const ApiKey = require('../apikeys.json');

export default function ShowFullReviewScreen({ route }) {

  
    const {reviewinfo} = route.params;
    return (
      <View style={styles.child}>
        <ScrollView >
          <EpisodeInfo episodeinfo ={reviewinfo.episodeinfo} seasonposterurl = {reviewinfo.seasonposterurl} />
          <ReviewCard episodeinfo={reviewinfo.episodeinfo} userid={reviewinfo.userid} reviewid={reviewinfo.reviewid} name={reviewinfo.name} review={reviewinfo.review} date={reviewinfo.date} rating={reviewinfo.rating} numberofLikes={reviewinfo.numberofLikes} numberofComments={reviewinfo.numberofComments} seasonposterurl={reviewinfo.seasonposterurl} alreadyLiked={reviewinfo.alreadyLiked} type = {'fullreviewscreen'}/>
          <Button title='Comments' type='outline' containerStyle={styles.containerStyle} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle}/>
          <ReviewComments reviewid ={reviewinfo.reviewid} />
        </ScrollView>
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
    containerStyle: {
      borderColor: '#FFFFFF',
      paddingTop:'5%'
    },
    titleStyle: {
      color: '#FFFFFF'
    },
    buttonStyle: {
      borderColor: '#FFFFFF'
    }

});

