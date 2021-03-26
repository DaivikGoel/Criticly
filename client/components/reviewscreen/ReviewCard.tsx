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
    },
    Bar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
});

const ReviewCard = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.Text}> {props.name}</Text>
                    <Text style={styles.Text}> {props.date}</Text>
                    <Text style={styles.Text}>{props.review}</Text>
                <View style={styles.Bar} />
            </View>
        </View>
    );
}
export default ReviewCard;