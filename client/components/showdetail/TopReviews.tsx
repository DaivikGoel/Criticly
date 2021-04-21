import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { View } from '../Themed';
import TopReviewCard from './TopReviewCard';
import { apiUrl } from '../../constants/apiurl';


export default class TopReviews extends Component<{}, { data: Array<any>, isLoading: boolean }> {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getreviews()
    }

    getreviews() {
        fetch(apiUrl + 'getreviews?episodenumber=' + this.props.episodeinfo.episode_number + '&seasonnumber=' + this.props.episodeinfo.season_number + '&showid=' + this.props.showid + '&userid=' + this.props.userid + '&type=latest')
            .then(async (response) => {
                const data = await response.json()
                this.setState({ data: this.state.data.concat(data) })

            }

            )
    }

    render(){
        return (
            <View style={styles.Container}>
                <TopReviewCard episodeinfo={this.props.episodeinfo} latestreview={this.state.data} showid={this.props.showid} item={this.state.data[0]} seasonposterurl={this.props.seasonposterurl}/>
            </View>
        );
    }
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

