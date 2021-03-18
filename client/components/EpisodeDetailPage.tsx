import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import Icon from './Icon';
import { search_url_tv, search_url_people } from '../constants/urls';
const ApiKey = require('../apikeys.json');




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
            .then(() => console.log(this.state))

    }



    render() {
        return (
            <View>
                    <ScrollView>
                    <Text style={styles.ShowTitle}>{this.props.payload.name}</Text>
                    <Text style={styles.Text}>{this.state.data.tagline}</Text>
                    </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    ShowTitle: {
        color: '#FFFFFF',
        fontSize: 30,
        paddingTop: '25%',
        textAlign: 'center'
    },
    Text: {
        color: '#FFFFFF'
    }
});