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
        this.fb()
    }

    async fb() {
        var info = dbh.collection('Reviews')
        const info2 = await info
        .where('episodeid', '==', this.props.episodeid)
        .get()
        info2.forEach((doc) => {
            this.setState({reviews: this.state.reviews.concat(doc.data())})
        })
    }


    render() {
        const reviews = this.state.reviews.map((item) => {
            const date = item.datecreated.toDate().toDateString()
            return (
                <ReviewCard name={item.userid} review = {item.reviewtext} date ={date} />
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