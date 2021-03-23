import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Dimensions, Text } from 'react-native';
import TVShowInfo from './TVShowInfo';
import SeasonInfo from './SeasonInfo'
import CastAndCrew from './CastAndCrew';
import TVShowRatings from './TVShowRatings';
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
    NetworkIcons: {
        width: windowWidth / 10,
        height: windowHeight / 10,
    }
});
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
        let seasonurl = "https://api.themoviedb.org/3/tv/" + this.props.payload.id +"/season/" 
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
        let crediturl = "https://api.themoviedb.org/3/tv/" + this.props.payload.id + "/credits" + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US";

        const SeasonLists = this.state.seasondata.sort(function (a, b) { return a.season_number - b.season_number; }).map((season) => {
            return (
                <SeasonInfo payload={season} showid={this.props.payload.id}/>
            )
        })
        return (
            <View>
                <ScrollView>
                    {this.state.isLoading == false ? (
                        <View>
                            <View>
                                <TVShowInfo payload ={this.state.showdata}/>
                                <TVShowRatings/>
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
        );
    }
}
