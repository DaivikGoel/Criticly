import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Dimensions } from 'react-native';
import TVShowInfo from './TVShowInfo';
import SeasonInfo from './SeasonInfo'
const ApiKey = require('../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ShowDetailContainer extends React.Component<{ payload: Array<any> }, { showdata: Array<any>, seasondata: Array<any>, isLoading: boolean }> {

    constructor(props) {
        super(props);
        this.state = {
            showdata:[],
            seasondata: [],
            isLoading: true
        };
    }
    componentDidMount() {
        let showurl = "https://api.themoviedb.org/3/tv/" + this.props.payload.id + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US";
        let seasonurl = "https://api.themoviedb.org/3/tv/" + this.props.payload.id +"/season/" //https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}?api_key=<<api_key>>&language=en-US
            fetch(showurl)
            .then((response) => response.json())
            .then((data) => { 
                this.setState({ 
                    showdata: data
                }); 
                })
            .then((data) => {
                this.state.showdata.seasons.map(season => (
                    fetch(seasonurl + season.season_number + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US")
                    .then((response) => response.json())
                    .then((response) => {
                        this.setState({
                            seasondata: this.state.seasondata.concat(response)
                        });
                    })
                ))
            })
            .then(() => {
                this.setState({ isLoading: false });
            })
    }



    render() {

        const SeasonLists = this.state.seasondata.sort(function (a, b) { return a.season_number - b.season_number; }).map((season) => {
            return (
                <SeasonInfo payload ={season}/>
            )
        })
        return (
            <View>
                <ScrollView>
                    {this.state.isLoading == false ? (
                        <View>
                            <TVShowInfo payload ={this.state.showdata}/>
                            {SeasonLists}
                        </View>
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