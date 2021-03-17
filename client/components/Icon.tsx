import * as React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';
import { Dimensions } from 'react-native';
import { View, Text } from './Themed';
import {Image} from 'react-native-elements'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },

    Logo: {
        width: windowWidth / 5,
        height: windowHeight / 6,
    },
    IconText:{
        color: 'white',
        textAlign: 'center', 


    },

});

const Icon = (props) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Image style={styles.Logo} source={{ uri: 'https://image.tmdb.org/t/p/original' + props.posterpath, }} PlaceholderContent= {<ActivityIndicator />}/>
            </TouchableOpacity>
        </View>
    );
}
export default Icon;

