import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { apiUrl } from '../../constants/apiurl';

const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    Container:{
        flexDirection: 'row', 
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: 'white', 
        paddingTop: '2%'
    },
    RatingMetaData: {
        flexDirection: 'column', 
        backgroundColor: 'rgba(0,0,0,0)' 
    }
    


});


export default class EpisodeRatings extends React.Component<{}, { isLoading: boolean, averageRating: number, ratingsCount: number, userRating: number, globalSeasonRating: number}> {

    constructor(props) {
        super(props);
        this.state = {
            averageRating: -1,
            ratingsCount: -1,
            userRating: -1,
            globalSeasonRating: -1,
            isLoading: true
        };
    }
    componentDidMount() {
        this.getAggregateReviews()

    }
    getAggregateReviews() {
        fetch(apiUrl + 'aggregateReviews?showid=' + this.props.showid + '&type=episode' + '&seasonnumber=' + this.props.episodeinfo.season_number + '&episodenumber=' + this.props.episodeinfo.episode_number + '&userid=' + this.props.userid)
            .then(async (response) => {
                const data = await response.json()
                this.setState({ averageRating: data[0]["GlobalEpisodeRating"], ratingsCount: data[0]["GlobalEpisodeCountRating"], userRating: data[0]["userRating"], globalSeasonRating: data[0]["GlobalSeasonRating"],  isLoading: false });
            }
            )
    }
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>{this.state.globalSeasonRating}/5</Text>
                    <Text style={styles.Text}>Average Season Rating </Text>
                </View>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>{this.state.averageRating}/5</Text>
                    <Text style={styles.Text}>Average Episode Rating </Text>
                </View>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>{this.state.userRating}</Text>
                    <Text style={styles.Text}> Your Rating </Text>
                </View>
            </View>
    );
    }
}

