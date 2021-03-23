import * as React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Dimensions } from 'react-native';
import { View, Text } from './Themed';
import {Image} from 'react-native-elements'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
import { original_url } from '../constants/urls';
import Poster from './Poster'

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },

    Logo: {
        width: windowWidth / 5,
        height: windowHeight / 6,
    },
    IconText:{
        color: 'white',
        textAlign: 'center', 


    },

});

const Icon = (props) => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={() =>navigation.push('ShowDetailScreen', 
                {
                    payload: props.payload
                })
      }>
                <Poster url={original_url + props.posterpath}/>
            </TouchableOpacity>
        </View>
    );
}
export default Icon;

