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
            <Button title='Latest Review' type='outline' containerStyle={styles.containerStyle} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle} onPress={() => navigation.push('ShowReviewScreen',
                {
                    episodeinfo: props.episodeinfo
                })
            } />
            { props.latestreviews == null ? 
            <Text>UNDEFINED</Text>
            :
            <ReviewCard name={props.latestreview[0].username} review={props.latestreview[0].reviewtext} date={props.latestreview[0].modified_instant} rating={props.latestreview[0].rating} />
}
    </View>
    );
}
export default TopReviewCard;