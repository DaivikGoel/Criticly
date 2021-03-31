import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, useWindowDimensions } from 'react-native';
import ReviewCard from './ReviewCard'
import { apiUrl } from '../../constants/apiurl';
import { Button } from 'react-native-elements';


import 'firebase/firestore';
import firebaseApp from '../../environment/firebaseconfig'
import * as firebase from 'firebase'


firebaseApp

const dbh = firebase.firestore();
const userid = 10;

export default class ReviewContainer extends React.Component<{}, {reviews:Array<any>}> {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
            
        };
    }
    componentDidMount(){
        this.getreviews()
    }


    getreviews() {
        fetch(apiUrl + 'getreviews?episodenumber=' + this.props.episodeinfo.episode_number + '&seasonnumber=' + this.props.episodeinfo.season_number + '&showid=' + this.props.showid + '&userid=' + userid)
        .then(async (response) => {
            const data = await response.json()
            this.setState({ reviews: this.state.reviews.concat(data) })
        
        }
        
        )
    }


    render() {
        const reviews = this.state.reviews.map((item) => {
            return (
                <View>
                    <ReviewCard userid = {item.userid}reviewid = {item.reviewid} name={item.username} review={item.reviewtext} date={item.modified_instant} rating={item.rating} numberofLikes={item.numberofLikes } alreadyLiked={item.hasUserLiked == 1 ? true : false}/>
                    <View style={styles.Bar} />
                </View>
            )
        })
        return (
            <View style={{ flexDirection: 'column' }} >
                <ScrollView style={{ paddingTop: '5%' }}>
                    {reviews}
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    SearchResult: {
        flexDirection: 'row',
    },
    InnerText: {
        flexDirection: 'column'
    },
    Bar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    TextView: {
        flex: 1,
    },
    Tabcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});