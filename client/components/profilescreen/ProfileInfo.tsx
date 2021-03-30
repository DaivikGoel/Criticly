import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions, ImageBackground } from 'react-native';
import { Image } from 'react-native-elements'

const ApiKey = require('../../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { test_image } from '../../constants/urls';
import { apiUrl } from '../../constants/apiurl';
import UserMetaData from './UserMetaData';

export default class ProfileInfo extends Component<{}, { userInfo: Array<any>, isLoading: boolean, recentlyReviewed: Array<any>, userStats: Record<string, string> }> {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            userStats:{},
            recentlyReviewed: [], 
            isLoading: true

        };
    }

    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo() {
        fetch(apiUrl + 'getuserinfo?userid=' + this.props.personid )
        .then(async (response) => {
            var data = await response.json()
            data = data[0]
            this.setState({ userInfo: data });
        }
        )

       fetch(apiUrl + 'getuserstats?userid=' + this.props.personid + '&type=reviews')
        .then(async (response) => {
            var data = await response.json()
            data = data[0]
            this.setState({ userStats: {
                numberofreviews: data['COUNT(*)']
            } });
        }
        )
        
        fetch(apiUrl + 'getreviews?userid=' + this.props.personid + '&type=user')
            .then(async (response) => {
                var data = await response.json()
                this.setState({
                        recentlyReviewed: data
                    }, () => console.log(this.state));
            }
            )


    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <UserMetaData payload = {this.state} />
                        <Text style={styles.bio}> {this.state.userInfo.bio}</Text>
                        <View style={styles.reviewcontainer}>
                            <Text style={styles.header}>Recently Reviewed</Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={200}
                                decelerationRate="fast"
                                style={{ backgroundColor: 'transparent' }}
                            >

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

    }
});
