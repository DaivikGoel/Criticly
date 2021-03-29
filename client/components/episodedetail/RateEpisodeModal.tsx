import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { AirbnbRating, Button } from 'react-native-elements';
import Poster from '../common/Poster'
import { apiUrl } from '../../constants/apiurl';
export default class RateEpisodeModal extends React.Component<{}, { Rating: number, ReviewText: string}> {
    constructor(props) {
        super(props);
        this.state = {
            ReviewText:'',
            Rating: 0
        };
    }
    onChangeText = (text) => {
    this.setState({
        ReviewText: text

    });
    }
    SaveRating = (rating) => {
        this.setState({
            Rating: rating

        });
    }

    submitReview = () => {
        if (this.state.Rating != 0){
            fetch(apiUrl + 'postreview', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    episodeid: this.props.payload.episodeinfo.id,
                    rating: this.state.Rating,
                    reviewtext: this.state.ReviewText,
                    seasonid: this.props.payload.seasoninfo.id,
                    showid: this.props.payload.showid,
                    userid: '10'
                })
            })

            this.props.hideModal()
        }
        else{

            Alert.alert('No Rating has been given')
        }

    }


    render(){
        return (
                <Modal 
                isVisible={this.props.isVisible}
                backdropOpacity = {0.9}
                >
                    <View style={{ flex: 1, flexDirection: 'column'}}>
                        <Button title="Hide modal" onPress={this.props.hideModal} />
                        <View style={styles.TitleView}>
                            <Poster url={this.props.payload.seasonposterurl} />
                                <View style={{ flexDirection: 'column', paddingLeft: '5%' }}>
                                    <Text style={styles.ShowTitle}>{this.props.payload.episodeinfo.name}</Text>
                                    <Text style={styles.Text}>Season {this.props.payload.episodeinfo.season_number}</Text>
                                    <Text style={styles.Text}>Episode {this.props.payload.episodeinfo.episode_number}</Text>
                                    <Text style={styles.Text}>Air Date {this.props.payload.episodeinfo.air_date} </Text>
                                    <Text style={styles.Text}>Directed by: {this.props.payload.episodeinfo.crew.find(el => el.job == 'Director')['name']}</Text>
                                </View>
                        </View>
                        <View>
                            <Text style={styles.ShowTitle}>Rate</Text>
                            <AirbnbRating
                            defaultRating = {0}
                            onFinishRating = {this.SaveRating}
                            />
                        </View>
                        <View style = {{paddingTop: '5%'}}>
                            <Text style={styles.ShowTitle}>Add a Review</Text>
                            <TextInput
                            style={styles.input}
                            placeholder='What do you think?'
                            placeholderTextColor = 'white'
                            multiline={true}
                            textAlignVertical = 'top'
                            onChangeText={this.onChangeText}
                        />
                        <Button title="Submit" onPress={this.submitReview}/>
                        </View>
                    </View>
                </Modal>
        );
    }
}

const styles = StyleSheet.create({
    ShowTitle: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    Text: {
        color: '#FFFFFF',
    },
    TitleView: {
        flexDirection: 'row',
        paddingTop: '10%',
        paddingLeft: '3%',

    },
    ImageOpacity: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    imgContainer: {
        width: '100%',
        height: '100%'

    },
    input: {
        height: '50%',
        margin: 12,
        borderWidth: 1,
        color: 'white',
        borderColor: 'white'
    },
});
