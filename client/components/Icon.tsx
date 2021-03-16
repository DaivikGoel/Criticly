import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { View } from './Themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },

    Logo: {
        width: windowWidth / 9,
        height: windowHeight / 8,
    },
});

const Icon = () => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Image style={styles.Logo} source={{ uri: 'https://static.displate.com/857x1200/displate/2019-11-26/806a8c67ffc9e55fd34c583d1771f4ce_dda30ce246a33d174fe1e11572468028.jpg', }}/>
            </TouchableOpacity>
        </View>
    );
}
export default Icon;

