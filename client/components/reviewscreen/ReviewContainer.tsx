import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, useWindowDimensions } from 'react-native';
import ReviewCard from './ReviewCard'

import 'firebase/firestore';
import firebaseApp from '../../environment/firebaseconfig'
import * as firebase from 'firebase'


firebaseApp

const dbh = firebase.firestore();


export default class ReviewContainer extends React.Component<{}, {reviews:Array<any>}> {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            
        };
    }
    componentDidMount(){
        this.getreviews()
    }

    async getreviews() {
        var info = dbh.collection('Reviews')
        const reviews = await info
        .where('episodeid', '==', this.props.episodeinfo.id)
        .get()
        reviews.forEach((doc) => {
            var userdata;
            (async () => {
                userdata = await this.getusername(doc.data().userid)
                var reviewdata = {
                    reviewdata: doc.data(),
                    userdata: userdata
                }
                this.setState({ reviews: this.state.reviews.concat(reviewdata) }, () => console.log(this.state))
            })()

        })
    }

    async getusername(userid) {
        console.log('userid',userid)
        var info = dbh.collection('users')
        var user;
        const reviews = await info
            .where(firebase.firestore.FieldPath.documentId(), '==', userid)
            .get()
        await reviews.forEach((doc) => {
            user = doc.data()
        })
        return user

    }


    render() {
        const reviews = this.state.reviews.map((item) => {
            const date = item.reviewdata.datecreated.toDate().toDateString()

            return (
                <ReviewCard name={item.userdata.name} review = {item.reviewdata.reviewtext} date ={date} rating = {item.reviewdata.rating}/>
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