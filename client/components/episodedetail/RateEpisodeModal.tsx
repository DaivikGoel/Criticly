import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { AirbnbRating, Button } from 'react-native-elements';
import Poster from '../common/Poster'
import { apiUrl } from '../../constants/apiurl';

const RateEpisodeModal = (props) => {

    const [ReviewText, setReviewText] = useState('');
    const [Rating, setRating] = useState(0);


    const onChangeText = (text) => {

        setReviewText(text)
    }
    const SaveRating = (rating) => {

        setRating(rating)
    }

    const submitReview = () => {
        if (Rating != 0){
            fetch(apiUrl + 'postreview', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    episodenumber: props.payload.episodeinfo.episode_number,
                    rating: Rating,
                    reviewtext: ReviewText,
                    seasonnumber: props.payload.seasoninfo.season_number,
                    showid: props.payload.showid,
                    userid: props.payload.userid
                })
            })

            props.hideModal()
        }
        else{

            Alert.alert('No Rating has been given')
        }

    }


        return (
                <Modal 
                isVisible={props.isVisible}
                backdropOpacity = {0.9}
                >
                <View style={{ flex: 1, flexDirection: 'column', paddingTop: '5%'}}>
                        <Button title="Hide modal" onPress={props.hideModal} />
                        <View style={styles.TitleView}>
                            <Poster url={props.payload.seasonposterurl} />
                                <View style={{ flexDirection: 'column', paddingLeft: '5%' }}>
                                    <Text style={styles.ShowTitle}>{props.payload.episodeinfo.name}</Text>
                                    <Text style={styles.Text}>Season {props.payload.episodeinfo.season_number}</Text>
                                    <Text style={styles.Text}>Episode {props.payload.episodeinfo.episode_number}</Text>
                                    <Text style={styles.Text}>Air Date {props.payload.episodeinfo.air_date} </Text>
                                    <Text style={styles.Text}>Directed by: {props.payload.episodeinfo.crew.find(el => el.job == 'Director')['name']}</Text>
                                </View>
                        </View>
                        <View>
                            <Text style={styles.ShowTitle}>Rate</Text>
                            <AirbnbRating
                            defaultRating = {0}
                            onFinishRating = {SaveRating}
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
                            onChangeText={onChangeText}
                        />
                        <Button title="Submit" onPress={submitReview}/>
                        </View>
                    </View>
                </Modal>
        );
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

export default RateEpisodeModal;
