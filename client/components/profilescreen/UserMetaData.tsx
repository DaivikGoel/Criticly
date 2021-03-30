import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions, ImageBackground } from 'react-native';
import { Image } from 'react-native-elements'

const ApiKey = require('../../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { test_image } from '../../constants/urls';
import { apiUrl } from '../../constants/apiurl';


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
    userstatscontainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        paddingTop: '5%'
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',

        width: '100%',
        height: '100%'
    },
    reviewcontainer: {
        backgroundColor: 'transparent',
        flex: 1

    },
    metadata: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%'
    }
});

const UserMetaData = (props) => {
    return (
        <View style={styles.metadata}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: props.payload.userInfo.profile_pic }}
                    style={styles.displayPic}
                />
                <View>
                    <Text style={styles.header}>{props.payload.userInfo.username} </Text>
                    <View style={styles.userstatscontainer}>
                        <View>
                            <Text style={styles.userstats}>{props.payload.userStats.numberofreviews} </Text>
                            <Text style={styles.userstats}>Reviews</Text>
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
        </View>
    );
}
export default UserMetaData ;