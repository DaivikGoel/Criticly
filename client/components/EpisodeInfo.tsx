import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions} from 'react-native';
import Poster from './Poster';
import { search_url_tv, search_url_people } from '../constants/urls';
import { original_url } from '../constants/urls';
import { Image } from 'react-native-elements'
const ApiKey = require('../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    ShowTitle: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    Text: {
        color: '#FFFFFF',
    },
    TitleView: {
        flexDirection: 'row',
        paddingTop: '10%'
    },
});

const EpisodeInfo = (props) => {
    return (
        <View style={styles.TitleView}>
            <Poster url={original_url + props.payload.still_path} />
            <View style={{ flexDirection: 'column', paddingLeft: '5%' }}>
                <Text style={styles.ShowTitle}>{props.payload.name}</Text>
                <Text style={styles.Text}>Season {props.payload.season_number}</Text>
                <Text style={styles.Text}>Episode {props.payload.episode_number}</Text>
                <Text style={styles.Text}>Air Date {props.payload.air_date} </Text>
            </View>
        </View>
    );
}
export default EpisodeInfo;