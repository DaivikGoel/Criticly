import * as React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { View, Text } from './Themed';
import { Image, Button} from 'react-native-elements'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
import { original_url } from '../constants/urls';

const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    Container: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
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


const ReviewButton = (props) => {
    return (
        <View style={styles.Container}>
            <Button title='Rate Episode' type = 'outline' containerStyle = {styles.containerStyle} titleStyle = {styles.titleStyle} buttonStyle = {styles.buttonStyle}/>
            <Button title='Add to a list' type='outline' containerStyle={styles.containerStyle, {paddingLeft: '2%', paddingRight:'2%'}} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle}/>
            <Button title='Share' type='outline' containerStyle={styles.containerStyle} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle}/>
        </View>
    );
}
export default ReviewButton;
