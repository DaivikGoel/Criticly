import * as React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { Image } from 'react-native-elements'
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


export default class EpisodeRatings extends React.Component<{}, { isLoading: boolean, averageRating: number, ratingsCount: number  }> {

    constructor(props) {
        super(props);
        this.state = {
            averageRating: -1,
            ratingsCount: -1,
            isLoading: true
        };
    }
    componentWillMount() {
        this.getAggregateReviews()

    }
    getAggregateReviews() {
        fetch(apiUrl + 'aggregateReviews?showid=' + this.props.showid + '&type=episode' + '&seasonnumber=' + this.props.episodeinfo.season_number + '&episodenumber=' + this.props.episodeinfo.episode_number)
            .then(async (response) => {
                const data = await response.json()
                this.setState({ averageRating: data[0]["AVG(rating)"], ratingsCount: data[0]["COUNT(rating)"], isLoading: false });
            }
            )
    }
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>{this.props.averageSeasonRating}/5</Text>
                    <Text style={styles.Text}>Average Season Rating </Text>
                </View>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>{this.state.averageRating}/5</Text>
                    <Text style={styles.Text}>Average Episode Rating </Text>
                </View>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>4/5</Text>
                    <Text style={styles.Text}> Your Rating </Text>
                </View>
            </View>
    );
    }
}

