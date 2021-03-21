import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions } from 'react-native';
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
        paddingTop: '10%',
        paddingLeft: '3%'
    },
    NetworkIcons: {
        width: windowWidth / 5,
        height: windowHeight / 10,
        resizeMode: 'contain'
    }
});

const TVShowInfo = (props) => {
    return (
        <View style={styles.TitleView}>
            <Poster url={original_url + props.payload.poster_path} />
            <View style={{ flexDirection: 'column', paddingLeft: '5%' }}>
                <Text style={styles.ShowTitle}>{props.payload.name}</Text>
                <Text style={styles.Text}>{props.payload.number_of_seasons} Seasons </Text>
                <Text style={styles.Text}>{props.payload.number_of_episodes} Episodes </Text>
                <Text style={styles.Text}> Last Air Date {props.payload.last_air_date} </Text>
                <Image style={styles.NetworkIcons} source={{ uri: original_url + props.payload.networks[0].logo_path }} PlaceholderContent={<ActivityIndicator />} />
            </View>
        </View>
    );
}
export default TVShowInfo;