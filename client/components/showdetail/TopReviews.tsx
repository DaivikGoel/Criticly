import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, } from 'react-native';
import { Dimensions } from 'react-native';
import { View, Text } from '../Themed';
import { Image, Button} from 'react-native-elements'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { original_url } from '../../constants/urls';
import { createStackNavigator } from 'react-navigation';
import TopReviewCard from './TopReviewCard';



const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    Container: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1,
        paddingTop:'5%', 
        paddingBottom: '5%'
    },
    RatingMetaData: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    button:{
        paddingLeft:'2%'
    },
    containerStyle:{
        borderColor: '#FFFFFF'
    },
    titleStyle:{
        color: '#FFFFFF'
    },
    buttonStyle:{
        borderColor: '#FFFFFF'
    }



});


export default class TopReviews extends Component<{}, { data: Array<any>, isLoading: boolean }> {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }




    render(){
        console.log('TOP REVIEW', this.props)
        return (
            <View style={styles.Container}>
                <TopReviewCard episodeinfo ={this.props.episodeinfo} />
            </View>
        );
    }
}
