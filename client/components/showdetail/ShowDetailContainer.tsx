import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Dimensions, Text, ImageBackground} from 'react-native';
import TVShowInfo from './TVShowInfo';
import SeasonInfo from './SeasonInfo'
import CastAndCrew from '../common/CastAndCrew';
import TVShowRatings from './TVShowRatings';
import { apiUrl } from '../../constants/apiurl';
import { original_url } from '../../constants/urls';
import {Button} from 'react-native';
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
        paddingTop: '10%'
    },
    NetworkIcons: {
        width: windowWidth / 10,
        height: windowHeight / 10,
    },
    imgContainer: {
        width: '100%', 
        height: '100%',

    },
});
export default class ShowDetailContainer extends React.Component<{ showid: number }, { showdata: Array<any>, seasondata: Array<any>, isLoading: boolean, averageRating: number, ratingsCount:number }> {

    constructor(props) {
        super(props);
        this.state = {
            showdata:[],
            seasondata: [],
            isLoading: true,
            averageRating: -1,
            ratingsCount: -1
        };
    }
    componentDidMount() {
        let showurl = "https://api.themoviedb.org/3/tv/" + this.props.showid + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US";
        let seasonurl = "https://api.themoviedb.org/3/tv/" + this.props.showid +"/season/"
        this.getAggregateReviews();
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

    getAggregateReviews() {
        fetch(apiUrl + 'aggregateReviews?showid=' + this.props.showid + '&type=season')
        .then(async (response) => {
            const data = await response.json()
            this.setState({ averageRating: data[0]["AVG(rating)"], ratingsCount: data[0]["COUNT(rating)"] });
            }
        )
    }

    addToWatchList(){
        fetch(apiUrl + 'postListItem', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: '10',
                listtype: "watchlist",
                title: "action movies"
            })
        })
    }



    render() {
        let crediturl = "https://api.themoviedb.org/3/tv/" + this.props.showid + "/credits" + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US";
        const SeasonLists = this.state.seasondata.sort(function (a, b) { return a.season_number - b.season_number; }).map((season) => {
            return (
                <SeasonInfo payload={season} showid={this.props.showid} averageSeasonRating = {this.state.averageRating}/>
            )
        })
        return (
            <ImageBackground style={styles.imgContainer} source={{ uri: original_url + this.state.showdata.backdrop_path }}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.7)',flex: 1}}>
                <ScrollView>
                    {this.state.isLoading == false ? (
                        <View>
                            <View>
                                <TVShowInfo payload ={this.state.showdata}/>
                                <Button onPress={this.addToWatchList} title="Add to watchlist"></Button>
                                <TVShowRatings averageRating = {this.state.averageRating} ratingsCount = {this.state.ratingsCount}/>
                                <Text style={styles.ShowTitle}>Seasons</Text>
                                {SeasonLists}
                            </View>
                            <View style ={{paddingTop:'5%'}}>
                            <Text style={styles.ShowTitle}>Cast and Crew</Text>
                            <CastAndCrew url ={crediturl}/>
                            </View>
                        </View>
                    ) :(
                        <ActivityIndicator size="large" /> 
                    
                    )}
                </ScrollView>
            </View>
            </ImageBackground>
        );
    }
}
