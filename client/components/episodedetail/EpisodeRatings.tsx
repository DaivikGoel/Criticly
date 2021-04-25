import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { apiUrl } from '../../constants/apiurl';




const EpisodeRatings = (props) => {

    const [isLoading, setisLoading] = useState(true);
    const [averageRating, setaverageRating] = useState(-1);
    const [userRating, setuserRating] = useState(-1);
    const [globalSeasonRating, setglobalSeasonRating] = useState(-1);
    const [ratingsCount, setratingsCount] = useState(-1);

    useEffect(() => {
        getAggregateReviews()
    }, []);

    function getAggregateReviews() {
        fetch(apiUrl + 'aggregateReviews?showid=' + props.showid + '&type=episode' + '&seasonnumber=' + props.episodeinfo.season_number + '&episodenumber=' + props.episodeinfo.episode_number + '&userid=' + props.userid)
            .then(async (response) => {
                const data = await response.json()
                setaverageRating(data[0]["GlobalEpisodeRating"])
                setratingsCount(data[0]["GlobalEpisodeCountRating"])
                setuserRating(data[0]["userRating"])
                setglobalSeasonRating(data[0]["GlobalSeasonRating"])
                setisLoading(false)
            }
            )
    }
        return (
            <View style={styles.Container}>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>{globalSeasonRating}/5</Text>
                    <Text style={styles.Text}>Average Season Rating </Text>
                </View>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>{averageRating}/5</Text>
                    <Text style={styles.Text}>Average Episode Rating </Text>
                </View>
                <View style={styles.RatingMetaData}>
                    <Text style={styles.Text}>{userRating}</Text>
                    <Text style={styles.Text}> Your Rating </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    Container: {
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

export default EpisodeRatings;