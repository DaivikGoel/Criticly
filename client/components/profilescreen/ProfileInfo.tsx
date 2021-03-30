import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions, ImageBackground } from 'react-native';
import { Image } from 'react-native-elements'

const ApiKey = require('../../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { test_image } from '../../constants/urls';
import { apiUrl } from '../../constants/apiurl';

export default class ProfileInfo extends Component<{}, { userInfo: Array<any>, isLoading: boolean, userStats: Record<string, string> }> {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            userStats:{},
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

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.metadata}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={{ uri: this.state.userInfo.profile_pic }}
                                style={styles.displayPic}
                            />
                            <View>
                                <Text style={styles.header}>{this.state.userInfo.username} </Text>
                                <View style = {styles.userstatscontainer}>
                                    <View>
                                        <Text style = {styles.userstats}>{this.state.userStats.numberofreviews} </Text>
                                        <Text style = {styles.userstats}>Reviews</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.userstats}>0</Text>
                                        <Text style={styles.userstats}>Followers</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.userstats}>0</Text>
                                        <Text style={styles.userstats}>Following</Text>
                                    </View>
                                </View>
                            </View>
                        </View> 
                        <Text style={styles.bio}> {this.state.userInfo.bio}</Text>
                        <Text style={styles.header}>My favourites</Text>
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
    userstats: {
        paddingTop: '5%',
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
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
    metadata: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%'
    }
});
