import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View} from 'react-native';
import Icon from './Icon';
const ApiKey = require('../apikeys.json');

let url = 'https://api.themoviedb.org/3/search/tv?api_key=' + ApiKey.TMDBApiKey + '&page=1&query=' ; 


export default class TheSearchBarPage extends React.Component<{}, { data: Array<any>, searchText: string, isLoading: boolean}> {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            data : [],
            isLoading: false
        };
    }
    handleOnChangeText = (text) => {
        // ? Visible the spinner
        this.setState({
            searchText: text,
            isLoading: true

        });
        fetch(url + text)
            .then((response) => response.json())
            .then((response) => { this.setState({ data: response.results }); })
            .catch((error) => console.error(error))
            .then(() => {
                this.setState({ isLoading: false });
            })
            .then(response => console.log(this.state))

        // ? After you've done to implement your use-case
        // ? Do not forget to set false to spinner's visibility
    };


    render() {
        const Icons = this.state.data.map((item) => {
            return (
                <Icon name={item.name} posterpath={item.poster_path} id={item.id} />
            )
        })

        return (
            <View>
            <SearchBar
                placeholder="Search TV Shows"
                onChangeText={this.handleOnChangeText}
            />
            <ScrollView>{Icons}</ScrollView>
            </View>
        );
    }
}