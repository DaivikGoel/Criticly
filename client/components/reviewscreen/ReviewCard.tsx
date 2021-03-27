import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground } from 'react-native';
import { Button, AirbnbRating } from 'react-native-elements'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
    },
    name: {
        color: '#FFFFFF',
        fontSize: Dimensions.get('window').height / 40
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
            <View style={{ flexDirection: 'column', paddingLeft: '2%', paddingRight: '2%'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.name}>{props.name}</Text>
                    <AirbnbRating
                        defaultRating={props.rating}
                        isDisabled={true}
                        showRating={false}
                        size={windowHeight / 40}
                    />
                </View>
                    <Text style={styles.Text}>{props.date}</Text>
                    <View style = {{paddingTop: '5%'}}>
                        <Text style={styles.Text}>{props.review}</Text>
                    </View>
                </View>
                <View style={styles.Bar} />
            </View>
    );
}
export default ReviewCard;