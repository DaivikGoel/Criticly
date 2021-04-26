import { StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import CollapsibleList from "react-native-collapsible-list";
import { useNavigation } from '@react-navigation/native';
import EpisodeCard from './EpisodeCard';
import { apiUrl } from '../../constants/apiurl';

const SeasonInfo = (props) => {
    
    const [watched, setwatched] = useState({});
    const [isLoading, setisLoading] = useState(true);


    useEffect(() => {
        getWatched()
    }, []);
    

    function getWatched() {
        fetch(apiUrl + 'getwatched?type=season&userid=' + props.userid + '&seasonnumber=' + props.payload.season_number + '&showid=' + props.showid)
            .then(async (response) => {
                const data = await response.json()
                var watcheddict = {}
                for (var i = 0; i < data.length; i++) {
                    const episodenumber = data[i].episodenumber
                    watcheddict[episodenumber] = true

                }
                setwatched(watcheddict)
            }
            )
            .then( () => {
                setisLoading(false)

            })
    }

    const Episodes = props.payload.episodes.map((episode) => {
        return (
            <EpisodeCard episode ={episode} seasoninfo ={props.payload} showid = {props.showid} averageSeasonRating = {props.averageSeasonRating} watched = {watched[episode.episode_number]} userid ={props.userid} />
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
                    {isLoading ? <ActivityIndicator /> : <View>{Episodes}</View> }
                </CollapsibleList>
            </View>
        );
    }


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

export default SeasonInfo;