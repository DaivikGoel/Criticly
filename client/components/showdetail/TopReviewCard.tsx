import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import ReviewCard from '../reviewscreen/ReviewCard'

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

const TopReviewCard = (props) => {
    const navigation = useNavigation();
    return (
    <View style ={{flex: 1}}>
            <Button title='Reviews' type='outline' containerStyle={styles.containerStyle} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle} onPress={() => navigation.push('ShowReviewScreen',
                {
                    episodeinfo: props.episodeinfo
                })
            } />
            <ReviewCard name='test2' date='yesterday' review ='Worst thing ive ever seen' />
    </View>
    );
}
export default TopReviewCard;