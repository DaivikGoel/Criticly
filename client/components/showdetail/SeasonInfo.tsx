import { StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import CollapsibleList from "react-native-collapsible-list";
import { useNavigation } from '@react-navigation/native';
import EpisodeCard from './EpisodeCard';
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
        padding: 10
    }
});
class SeasonInfo extends React.Component<{}, { watched: Record<string, boolean> , isLoading: boolean}> {
    
    constructor(props) {
        super(props);
        this.state = {
            watched: {},
            isLoading: true


        };
    }
    
    componentDidMount() {
        this.getWatched()
    }

    getWatched() {
        fetch(apiUrl + 'getwatched?type=season&userid=' + this.props.userid + '&seasonnumber=' + this.props.payload.season_number + '&showid=' + this.props.showid)
            .then(async (response) => {
                const data = await response.json()
                var watcheddict = {}
                for (var i = 0; i < data.length; i++) {
                    const episodenumber = data[i].episodenumber
                    watcheddict[episodenumber] = true

                }
                this.setState({
                    watched: watcheddict,

                });
            }
            )
            .then( () => {
                this.setState({

                    isLoading: false
                })

            })
    }

    render(){
        const Episodes = this.props.payload.episodes.map((episode) => {



            return (
                <EpisodeCard episode ={episode} seasoninfo ={this.props.payload} showid = {this.props.showid} averageSeasonRating = {this.props.averageSeasonRating} watched = {this.state.watched[episode.episode_number]} userid ={this.props.userid} />
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
                                <Text>{this.props.payload.name}</Text>
                            </View>
                        </View>
                    }
                >
                    {this.state.isLoading ? <ActivityIndicator /> : <View>{Episodes}</View> }
                </CollapsibleList>
            </View>
        );
    }
}
export default function (props) {
    const navigation = useNavigation();

    return <SeasonInfo {...props} navigation={navigation} />;
}