import { StyleSheet, View, Text, Dimensions } from 'react-native';
import React from 'react';
import CollapsibleList from "react-native-collapsible-list";
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

class EpisodeCard extends React.Component<{}, { watched: boolean }> {

    constructor(props) {
        super(props);
        this.state = {
            watched: this.props.watched


        };
    }


    onToggleWatch() {
        this.setState({ watched: !this.state.watched }, () => {

        if (this.state.watched == true) {
            this.postEpisodeWatched('add', 'episode')
        }
        else {
            this.postEpisodeWatched('remove', 'episode')
        }
    }

        )
    }

    postEpisodeWatched(type, category = 'episode' ) {
        const userid = 9

        fetch(apiUrl + 'postwatched', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: type,
                category: category, 
                showid: this.props.showid , 
                userid: userid,
                seasonnumber: this.props.episode.season_number,
                episodenumber: this.props.episode.episode_number

            })
        })
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.collapsibleItem}>
                <TouchableOpacity
                    onPress={() => navigation.push('ShowSingleEpisodeDetailScreen',
                        {
                            episodeinfo: this.props.episode,
                            seasoninfo: this.props.seasoninfo,
                            showid: this.props.showid,
                            averageSeasonRating: this.props.averageSeasonRating
                        })
                    }>
                    <Text>{this.props.episode.episode_number} {this.props.episode.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onToggleWatch()}>
                    <Ionicons name={this.state.watched ? "eye" : "eye-outline"} backgroundColor="transparent" size={20} color={this.state.watched ? "green" : "black"} />
                </TouchableOpacity>
            </View>
        );
    }
}
export default function (props) {
    const navigation = useNavigation();

    return <EpisodeCard {...props} navigation={navigation} />;
}