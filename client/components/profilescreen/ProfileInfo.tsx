import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, RefreshControl } from 'react-native';
import { AirbnbRating } from 'react-native-elements'

const ApiKey = require('../../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import { apiUrl } from '../../constants/apiurl';
import UserMetaData from './UserMetaData';
import Icon from '../common/Icon'

export default class ProfileInfo extends Component<{}, { userInfo: Array<any>, isLoading: boolean, recentlyReviewed: Array<any>, userStats: Record<string, string>, userWatchList: Array<any>}> {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            userStats:{},
            userWatchList:[],
            recentlyReviewed: [], 
            isLoading: true,
            

        };
    }

    componentDidMount() {
        this.getUserInfo()
    }

    _onRefresh = () => {
        this.setState({ isLoading: true });
        this.getUserInfo()
    }

    getUserInfo() {
        this.getUsersList();
        this.getUserStats();
        this.getReviewsForUser();
        this.getWatchlistForUser();
                
        this.setState({ isLoading: false });
        this.forceUpdate();
    }


    private getReviewsForUser() {
        fetch(apiUrl + 'getreviews?userid=' + this.props.personid + '&type=user')
            .then(async (response) => {
                var data = await response.json();
                this.setState({
                    recentlyReviewed: data
                },
                    () => (

                        this.state.recentlyReviewed.forEach(item => (
                            fetch("https://api.themoviedb.org/3/tv/" + item.showid + "/season/" + item.seasonnumber + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US")
                                .then(async (response) => {
                                    var data = await response.json();
                                    item.showdata = data;
                                    this.setState({ isLoading: false });
                                    this.forceUpdate();
                                }
                                )
                        )


                        )

                    )
                );
            }
            );
    }

    private getUserStats() {
        fetch(apiUrl + 'getuserstats?userid=' + this.props.personid + '&type=reviews')
            .then(async (response) => {
                var data = await response.json();
                data = data[0];
                this.setState({
                    userStats: {
                        numberofreviews: data['COUNT(*)']
                    }
                });
            }
            );
    }

    private getUsersList() {
        fetch(apiUrl + 'getuserinfo?userid=' + this.props.personid)
            .then(async (response) => {
                var data = await response.json();
                data = data[0];
                this.setState({ userInfo: data });
            }
            );
    }

    private getWatchlistForUser(){
        fetch(apiUrl + 'getListItem?userid=' + this.props.personid)
        .then(async (response) => {
            var data = await response.json();
            this.setState({userWatchList : data});
            console.log(this.state)
        }
        );
    }

     private renderWatchListsForUser(){
         return this.state.userWatchList.map((item, index) => <Text style={{color:"white"}} key={index}>{item.showid}</Text>);
     }

    render() {
        const Icons = this.state.recentlyReviewed.map((item) => {
            var poster_path
            var episodename
            if(typeof(item.showdata) == 'undefined'){
                poster_path = null
                episodename = null 
            }
            else {
                poster_path = item.showdata.poster_path
                episodename = item.showdata.episodes[item.episodenumber - 1].name
            }
            return (
                <View>
                <Icon key={item.id} showid={item.showid} posterpath={poster_path}/>
                <Text style={styles.userreview} numberOfLines ={1}>{episodename}</Text>
                <AirbnbRating
                    defaultRating={item.rating}
                    isDisabled={true}
                    showRating={false}
                    size={windowHeight / 70}
                />
                </View>
            )
        })
        return (
            <View style={styles.container}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <UserMetaData payload = {this.state} />
                        <Text style={styles.bio}> {this.state.userInfo.bio}</Text>
                        <Text style={styles.header}>My Watchlist</Text>
                        <View>
                        {this.renderWatchListsForUser()}
                        
                        </View>
                        <View style={styles.reviewcontainer}>
                            <Text style={styles.header}>Recently Reviewed</Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={200}
                                decelerationRate="fast"
                                style={{ backgroundColor: 'transparent' }}
                            >
                            {Icons}
                            </ScrollView>
                        </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    displayPic: {
        width: 100,
        height: 100,
        borderRadius: 400 / 2
    },
    header: {
        paddingTop: '5%',
        fontSize: 30,
        color: 'white'
    },
    bio: {
        paddingTop: '5%',
        fontSize: 20, 
        color: 'white'
    },
    userstatscontainer:{
        flexDirection: 'row',
        alignContent: 'space-between',
        paddingTop:'5%'
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',

        width: '100%',
        height: '100%'
    },
    reviewcontainer: {
        backgroundColor: 'transparent',
        flex:1

    },
    userreview: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        width: windowWidth / 4
    },
});
