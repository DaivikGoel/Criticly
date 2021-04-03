import * as React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { Image, Button} from 'react-native-elements'
import LeaveCommentModal from './LeaveCommentModal';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class ReplyButton extends React.Component<{}, { LeaveCommentVisible:boolean }> {

    constructor(props) {
        super(props);
        this.state = {
            LeaveCommentVisible: false
        };
    }
    showReview = () => {
        // ? Visible the spinner
            this.setState({
                LeaveCommentVisible: !this.state.LeaveCommentVisible
        })};
    render() {
        return (
            <View style={styles.Container}>
                <Button title='Reply' type = 'outline' containerStyle = {styles.containerStyle} titleStyle = {styles.titleStyle} buttonStyle = {styles.buttonStyle} onPress = {this.showReview}/>
                <LeaveCommentModal isVisible={this.state.LeaveCommentVisible} hideModal={this.showReview.bind(this)} reviewid={this.props.reviewid}/>
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
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
