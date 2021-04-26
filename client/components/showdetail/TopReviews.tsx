import React, { useState, useEffect } from 'react';
import { StyleSheet, } from 'react-native';
import { View } from '../Themed';
import TopReviewCard from './TopReviewCard';
import { apiUrl } from '../../constants/apiurl';


const TopReviews = (props) => {


    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {

        getreviews()

    }, []);


    function getreviews() {
        fetch(apiUrl + 'getreviews?episodenumber=' + props.episodeinfo.episode_number + '&seasonnumber=' + props.episodeinfo.season_number + '&showid=' + props.showid + '&userid=' + props.userid + '&type=latest')
            .then(async (response) => {
                const data = await response.json()
                setdata(data.concat(data))

            }

            )
    }


    return (
        <View style={styles.Container}>
            <TopReviewCard episodeinfo={props.episodeinfo} latestreview={data} showid={props.showid} item={data[0]} seasonposterurl={props.seasonposterurl}/>
        </View>
    );
}


const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    Container: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1,
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    RatingMetaData: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    button: {
        paddingLeft: '2%'
    },
    containerStyle: {
        borderColor: '#FFFFFF'
    },
    titleStyle: {
        color: '#FFFFFF'
    },
    buttonStyle: {
        borderColor: '#FFFFFF'
    }



});

export default TopReviews;
