import * as React from 'react';
import { Text, View } from '../components/Themed';
import { ImageBackground} from 'react-native';
import {Image} from 'react-native-elements'
import List from '../components/common/List'
import { original_url, people_url} from '../constants/urls';
import { StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';
import TopReviewCard from '../components/showdetail/TopReviewCard';

const ApiKey = require('../apikeys.json');

export default function ShowReviewScreen({ route }) {

  
    const { reviews } = route.params;
    return (
      <View style={styles.child}>
        <ScrollView >
          <TopReviewCard />
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

});

