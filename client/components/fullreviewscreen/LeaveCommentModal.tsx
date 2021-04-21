import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { apiUrl } from '../../constants/apiurl';


export default class LeaveCommentModal extends React.Component<{}, { ReviewText: string }> {
    constructor(props) {
        super(props);
        this.state = {
            ReviewText: '',
        };
    }
    onChangeText = (text) => {
        this.setState({
            ReviewText: text

        });
    }
    
    submitReview = () => {
        if (this.state.Rating != 0) {
            fetch(apiUrl + 'postcomment', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: this.props.userid,
                    reviewid: this.props.reviewid,
                    reviewcomment: this.state.ReviewText
                })
            })

            this.props.hideModal()
        }
        else {

            Alert.alert('No Rating has been given')
        }

    }


    render() {
        return (
            <Modal
                isVisible={this.props.isVisible}
                backdropOpacity={0.9}
            >
                <View style={{ flex: 1, flexDirection: 'column', paddingTop:'5%' }}>
                    <Button title="Hide modal" onPress={this.props.hideModal} />
                    <View style={{ paddingTop: '5%' }}>
                        <Text style={styles.ShowTitle}>Leave a Comment</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='What do you think?'
                            placeholderTextColor='white'
                            multiline={true}
                            textAlignVertical='top'
                            onChangeText={this.onChangeText}
                        />
                        <Button title="Submit" onPress={this.submitReview} />
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
