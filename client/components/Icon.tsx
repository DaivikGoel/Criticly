import * as React from 'react';
import { StyleSheet , Image} from 'react-native';
import { Dimensions } from 'react-native';
import { View } from './Themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },

    tinyLogo: {
        width: windowWidth / 10,
        height: windowHeight / 8,
    },
});

const Icon = () => {
    return (
        <View style = {styles.container}>
            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png', }}/>
        </View>
    );
}
export default Icon;

