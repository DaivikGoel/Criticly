import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'


const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    Container: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1,
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    RatingMetaData: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    button: {
        paddingLeft: '2%'
    },
    containerStyle: {
        borderColor: '#FFFFFF'
    },
    titleStyle: {
        color: '#FFFFFF'
    },
    buttonStyle: {
        borderColor: '#FFFFFF'
    }
});

const ReviewCard = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.Text}> Reviewer Name </Text>
            <Text style={styles.Text}> Date Written</Text>
            <Text style={styles.Text}>Yes! The ultimate Mafia television show. If you are a lover of mobster film then you are the one that counts. This show has a great story line that was  very direct, they did not fluff every aspect of that type of lifestyle. The characters were very vulnerable and honest. I love the expected delivery, the norm of the show where Tony walks out every day to get the paper in his robe. This reoccurring scene showed us exactly how our men are monotonous in their ways!</Text>
        </View>
    );
}
export default ReviewCard;