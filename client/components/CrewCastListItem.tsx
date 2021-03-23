import * as React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { View, Text } from './Themed';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },

    Logo: {
        width: windowWidth / 5,
        height: windowHeight / 6,
    },
    IconText: {
        color: 'white',
        textAlign: 'center',


    },
    collapsibleItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#CCC",
        padding: 10
    }

});

const CrewCastListItem = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.collapsibleItem}>
            <TouchableOpacity onPress={() => navigation.navigate('ShowPeopleScreen',
                {
                    person: props.payload
                })
            }>
                <Text>{props.name}</Text>
                <Text style={{ textAlign: 'right' }}>{props.role}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CrewCastListItem;