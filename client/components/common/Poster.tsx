import * as React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { Image } from 'react-native-elements'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },

    Logo: {
        width: windowWidth / 5,
        height: windowHeight / 6,
        resizeMode:'cover'
    },
    IconText: {
        color: 'white',
        textAlign: 'center',


    },

});

const Poster = (props) => {
    return (
        <Image style={styles.Logo} source={{ uri: props.url }} PlaceholderContent={<ActivityIndicator />} />
    );
}
export default Poster;

