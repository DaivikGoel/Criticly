import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions } from 'react-native';
import TVShowInfo from './TVShowInfo';
import { search_url_tv, search_url_people } from '../constants/urls';
import { original_url } from '../constants/urls';
import { Image } from 'react-native-elements'
const ApiKey = require('../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class EpisodeDetailPage extends React.Component<{ payload: Array<any> }, { data: Array<any>, isLoading: boolean }> {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }
    componentDidMount() {
        let url = "https://api.themoviedb.org/3/tv/" + this.props.payload.id + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US";
        fetch(url)
            .then((response) => response.json())
            .then((response) => { this.setState({ data: response }); })
            .catch((error) => console.error(error))
            .then(() => {
                this.setState({ isLoading: false });
            })

    }



    render() {
        console.log('HERE', this.state.data.networks)
        return (
            <View>
                    <ScrollView>
                    {this.state.isLoading == false ? (
                    <TVShowInfo payload ={this.state.data}/>
                    ) :(
                            <ActivityIndicator size="large" /> 
                    )}
                    </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    ShowTitle: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    Text: {
        color: '#FFFFFF',
    },
    TitleView:{
        flexDirection: 'row',
        paddingTop: '10%'
    },
    NetworkIcons: {
        width: windowWidth / 10,
        height: windowHeight / 10,
    }
});