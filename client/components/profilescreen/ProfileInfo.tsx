import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions, ImageBackground } from 'react-native';
import { Image } from 'react-native-elements'

const ApiKey = require('../../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { test_image } from '../../constants/urls';
import { apiUrl } from '../../constants/apiurl';

export default class ProfileInfo extends Component<{}, { userInfo: Array<any>, isLoading: boolean}> {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
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
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: this.state.userInfo.profile_pic }}
                    style={styles.displayPic}
                />
                <Text style={styles.header}>{this.state.userInfo.username} </Text>
                <Text style={styles.bio}> {this.state.userInfo.bio}</Text>
                <Text style={styles.header}>My favourites</Text>
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
        paddingTop: '15%',
        fontSize: 30,
        color: 'white'
    },
    bio: {
        paddingTop: '15%',
        fontSize: 30, 
        color: 'white'
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
});
