import * as React from 'react';
import { Text, View } from '../components/Themed';
import { ImageBackground} from 'react-native';
import {Image} from 'react-native-elements'
import List from '../components/common/List'
import { original_url, people_url} from '../constants/urls';
import { StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';
import PeopleInfo from '../components/peoplescreen/PeopleInfo'
const ApiKey = require('../apikeys.json');
import { AuthContext } from '../navigation/RootNavigator'

export default function ShowPeopleScreen({ route }) {
  const context = React.useContext(AuthContext);
  
    const { person } = route.params;
    return (
      <View style={styles.child}>
        <ScrollView >
          <PeopleInfo profilepic ={original_url + person.profile_path} person ={person} />
          <List url={'https://api.themoviedb.org/3/person/' + person.id + '/tv_credits' + '?api_key=' + ApiKey.TMDBApiKey +  '&language=en-US'} type ='cast' name='TV Shows Known For' />
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

