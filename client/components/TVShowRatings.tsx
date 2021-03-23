import * as React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { View, Text } from './Themed';
import { Image } from 'react-native-elements'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
import { original_url } from '../constants/urls';

const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    Container:{
        flexDirection: 'row', 
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: 'white', 
        paddingTop: '2%'
    },
    RatingMetaData: {
        flexDirection: 'column', 
        backgroundColor: 'rgba(0,0,0,0)' 
    }
    


});


const TVShowRatings = (props) => {
    return (
        <View style={styles.Container}>
            <View style={styles.RatingMetaData}>
                <Text style={styles.Text}>550</Text>
                <Text style={styles.Text}>Total Ratings </Text>
            </View>
            <View style={styles.RatingMetaData}>
                <Text style={styles.Text}>3.8/5</Text>
                <Text style={styles.Text}>Average Episode Rating </Text>
            </View>
            <View style={styles.RatingMetaData}>
                <Text style={styles.Text}>3.5/5</Text>
                <Text style={styles.Text}> Your Average Rating </Text>
            </View>
        </View>
    );
}
export default TVShowRatings;
