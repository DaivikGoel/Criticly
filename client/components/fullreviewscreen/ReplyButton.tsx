import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button} from 'react-native-elements'
import LeaveCommentModal from './LeaveCommentModal';



const ReplyButton = (props) => {

    const [LeaveCommentVisible, setLeaveCommentVisible] = useState(false);

    const showReview = () => {
        // ? Visible the spinner
        setLeaveCommentVisible(!LeaveCommentVisible)
    
    };

        return (
            <View style={styles.Container}>
                <Button title='Reply' type = 'outline' containerStyle = {styles.containerStyle} titleStyle = {styles.titleStyle} buttonStyle = {styles.buttonStyle} onPress = {showReview}/>
                <LeaveCommentModal isVisible={LeaveCommentVisible} hideModal={showReview.bind(this)} reviewid={props.reviewid} userid = {props.userid}/>
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

export default ReplyButton;