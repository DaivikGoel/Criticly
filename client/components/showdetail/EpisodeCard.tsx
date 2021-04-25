import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { apiUrl } from '../../constants/apiurl';

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
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const EpsiodeCard = (props) => {
const navigation = useNavigation();
const [watched, setEpisodeWatched] = useState(props.watched);
function onToggleWatch() {
    setEpisodeWatched(!watched)
}
 function postEpisodeWatched(type, category = 'episode' ) {

    fetch(apiUrl + 'postwatched', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: type,
            category: category, 
            showid: props.showid , 
            userid: props.userid,
            seasonnumber: props.episode.season_number,
            episodenumber: props.episode.episode_number

        })
    })
}

useEffect(() => {

        if (watched == true) {
            postEpisodeWatched('add', 'episode')
        }
        else {
            postEpisodeWatched('remove', 'episode')
        }
},[watched]);



return (
    <View style={styles.collapsibleItem}>
        <TouchableOpacity
            onPress={() => navigation.push('ShowSingleEpisodeDetailScreen',
                {
                    episodeinfo: props.episode,
                    seasoninfo: props.seasoninfo,
                    showid: props.showid,
                    averageSeasonRating: props.averageSeasonRating
                })
            }>
            <Text>{props.episode.episode_number} {props.episode.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onToggleWatch()}>
            <Ionicons name={watched ? "eye" : "eye-outline"} backgroundColor="transparent" size={20} color={watched ? "green" : "black"} />
        </TouchableOpacity>
    </View>
);



}
export default EpsiodeCard;