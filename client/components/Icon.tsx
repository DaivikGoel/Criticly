import * as React from 'react';
import { StyleSheet , Image} from 'react-native';

import { View } from './Themed';

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    title: {
        fontSize: 49,
        fontWeight: 'bold',
    },
    tinyLogo: {
        width: 100,
        height: 200,
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

