import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions, ImageBackground} from 'react-native';
import Poster from '../common/Poster';
import { search_url_tv, search_url_people } from '../../constants/urls';
import { original_url } from '../../constants/urls';
import { Image } from 'react-native-elements'
import ReviewButton from "./ReviewButton";
const ApiKey = require('../../apikeys.json');
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
        paddingLeft:'3%',
        flex: 1,

    },
    ImageOpacity:{
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    imgContainer: {
        width: '100%', 
        height: '100%'

    },
});

const EpisodeInfo = (props) => {
    return (
    <View style ={{flex: 1}}>
        <ImageBackground style={styles.imgContainer} source={{ uri: original_url + props.episodeinfo.still_path}}>
            <View style = {styles.ImageOpacity}>
                <View style={styles.TitleView}>
                    <Poster url ={props.seasonposterurl}/>
                    <View style={{ flexDirection: 'column', paddingLeft: '5%' }}>
                        <Text style={styles.ShowTitle}>{props.episodeinfo.name}</Text>
                        <Text style={styles.Text}>Season {props.episodeinfo.season_number}</Text>
                        <Text style={styles.Text}>Episode {props.episodeinfo.episode_number}</Text>
                        <Text style={styles.Text}>Air Date {props.episodeinfo.air_date} </Text>
                        <Text style={styles.Text}>Directed by: {props.episodeinfo.crew.find( el => el.job =='Director')['name']}</Text>
                    </View>
                </View>
                <ReviewButton payload = {props}/>
            </View>
        </ImageBackground>
    </View>
    );
}
export default EpisodeInfo;