import { StyleSheet, View, Text, Dimensions } from 'react-native';
import React from 'react';
import CollapsibleList from "react-native-collapsible-list";
import { TouchableOpacity } from 'react-native-gesture-handler';
const ApiKey = require('../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 20,
        overflow: "hidden",
        backgroundColor: "#FFF",
        borderRadius: 5
    },
    collapsibleItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#CCC",
        padding: 10
    }
});
const SeasonInfo = (props) => {
    const Episodes = props.payload.episodes.map((episode) => {
        return (
            <View style={styles.collapsibleItem}>
            <TouchableOpacity>
                <Text>{episode.episode_number} {episode.name}</Text>
            </TouchableOpacity>
            </View>

        )
    })
    return (
        <View >
            <CollapsibleList
                numberOfVisibleItems={0}
                wrapperStyle={styles.wrapperCollapsibleList}
                buttonPosition='top'
                buttonContent={
                    <View>
                        <View style={styles.collapsibleItem}>
                            <Text>{props.payload.name}</Text>
                        </View>
                    </View>
                }
            >
            {Episodes}
            </CollapsibleList>
        </View>
    );
}
export default SeasonInfo;