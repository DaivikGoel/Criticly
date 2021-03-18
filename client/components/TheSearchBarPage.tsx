import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text} from 'react-native';
import Icon from './Icon';
import { search_url } from '../constants/urls';
const ApiKey = require('../apikeys.json');

let url = search_url + ApiKey.TMDBApiKey + '&page=1&query=' ; 


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
        if (text != ''){
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
        }
    };
    onClear = () => {
        // ? Visible the spinner
        this.setState({
            searchText: '',
            isLoading: false
        });

    };


    render() {
        const SearchResults = this.state.data.map((item) => {
            return (
                <View style ={{flexDirection: 'column'}}>
                    <View style ={styles.SearchResult}>
                        <Icon name={item.name} posterpath={item.poster_path} id={item.id} id={item.id} payload={item}/>
                        <View>
                            <Text>{item.name}</Text> 
                            <Text>{item.overview}</Text> 
                        </View>
                    </View>
                    <View style={styles.bar}/>
                </View>
                
            )
        })

        return (
            <View>
                <SearchBar
                    placeholder="Search TV Shows"
                    onChangeText={this.handleOnChangeText}
                    onClearPress={this.onClear}
                />
                <ScrollView>{SearchResults}</ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    SearchResult: {
        flexDirection: 'row'
    },
    InnerText:{
        flexDirection: 'column'
    },
    bar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});