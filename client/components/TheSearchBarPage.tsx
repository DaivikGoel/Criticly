import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text} from 'react-native';
import Icon from './Icon';
import { search_url_tv, search_url_people } from '../constants/urls';
const ApiKey = require('../apikeys.json');


let types = [["TV Shows", search_url_tv], ["Actors", search_url_people]];


export default class TheSearchBarPage extends React.Component<{}, { peopledata: Array<any>, tvdata: Array<any>, searchText: string, isLoading: boolean}> {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            tvdata : [],
            peopledata: [],
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
            this.fetchdata(search_url_tv + ApiKey.TMDBApiKey + '&page=1&query=' + text, 'tvdata');
            this.fetchdata(search_url_people + ApiKey.TMDBApiKey + '&page=1&query=' + text,'peopledata');
            console.log(this.state.peopledata)
        }
        else
            this.setState({
                searchText: '',
                isLoading: false,
                tvdata: [],
                peopledata: []
            });

    };
    fetchdata = (url, statetype) => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => { this.setState({ [statetype] : response.results }); })
            .catch((error) => console.error(error))
            .then(() => {
                this.setState({ isLoading: false });
            })

    }
    onClear = () => {
        // ? Visible the spinner
        this.setState({
            searchText: '',
            isLoading: false,
            tvdata: [],
            peopledata:[]
        });

    };


    render() {
        const TVSearchResults = this.state.tvdata.map((item) => {
            return (
                <View style ={{flexDirection: 'column'}}>
                    <View style ={styles.SearchResult}>
                        <Icon name={item.name} posterpath={item.poster_path} id={item.id} payload={item}/>
                        <View style = {styles.TextView}>
                            <Text>{item.name}</Text> 
                            <Text>{item.overview}</Text> 
                        </View>
                    </View>
                    <View style={styles.Bar}/>
                </View>
                
            )
        })
        const PeopleSearchResults = this.state.peopledata.map((item) => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.SearchResult}>
                        <Icon name={item.name} posterpath={item.profile_path} id={item.id} payload={item} />
                        <View style={styles.TextView}>
                            <Text>{item.name}</Text>
                        </View>
                    </View>
                    <View style={styles.Bar} />
                </View>

            )
        })

        return (
            <View>
                <SearchBar
                    placeholder="Search"
                    onChangeText={this.handleOnChangeText}
                    onClearPress={this.onClear}
                />
                <View>

                <ScrollView>
                <Text> TV Shows</Text>
                    {TVSearchResults}
                <Text> People</Text>
                {PeopleSearchResults}
                </ScrollView>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    SearchResult: {
        flexDirection: 'row',
    },
    InnerText:{
        flexDirection: 'column'
    },
    Bar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    TextView: {
        flex: 1,
    }
});