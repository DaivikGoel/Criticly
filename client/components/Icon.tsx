import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { View, Text } from './Themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },

    Logo: {
        width: windowWidth / 5,
        height: windowHeight / 6,
    },
});

const Icon = (props) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Text>{props.name}</Text>
                <Image style={styles.Logo} source={{ uri: 'https://image.tmdb.org/t/p/original' + props.posterpath, }}/>
            </TouchableOpacity>
        </View>
    );
}
export default Icon;

