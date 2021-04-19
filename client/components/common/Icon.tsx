import * as React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, View, Text} from 'react-native';
import { Dimensions } from 'react-native';
import {Image} from 'react-native-elements'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
import { original_url } from '../../constants/urls';
import Poster from './Poster'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'transparent'
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
    const navigation = useNavigation();
    switch (props.type){
        case 'people':
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.push('ShowPeopleScreen',
                        {
                            person: props.payload
                        })
                    }>
                        <Poster url={original_url + props.posterpath} />
                    </TouchableOpacity>
                </View>
            );

        case 'user': 
            return (
                 <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.push('UserScreen',
                        {
                            userid: props.userid
                        })
                    }>
                        <Poster url={props.posterpath} />
                    </TouchableOpacity>
                </View>
            );

        default:
            return (
                <View style = {styles.container}>
                    <TouchableOpacity onPress={() =>navigation.push('ShowDetailScreen', 
                        {
                            showid: props.showid
                        })
            }>
                        <Poster url={original_url + props.posterpath}/>
                    </TouchableOpacity>
                </View>
            );
            break;
}
}
export default Icon;

