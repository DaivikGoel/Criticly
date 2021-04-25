import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { apiUrl } from '../../constants/apiurl';


const LeaveCommentModal = (props) => {
    const [ReviewText, setReviewText] = useState('');

    const onChangeText = (text) => {
        setReviewText(text)
    }
    
    const submitReview = () => {

            fetch(apiUrl + 'postcomment', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: props.userid,
                    reviewid: props.reviewid,
                    reviewcomment: ReviewText
                })
            })

           props.hideModal()
        }



        return (
            <Modal
                isVisible={props.isVisible}
                backdropOpacity={0.9}
            >
                <View style={{ flex: 1, flexDirection: 'column', paddingTop:'5%' }}>
                    <Button title="Hide modal" onPress={props.hideModal} />
                    <View style={{ paddingTop: '5%' }}>
                        <Text style={styles.ShowTitle}>Leave a Comment</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='What do you think?'
                            placeholderTextColor='white'
                            multiline={true}
                            textAlignVertical='top'
                            onChangeText={onChangeText}
                        />
                        <Button title="Submit" onPress={submitReview} />
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

export default LeaveCommentModal;
