import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button} from 'react-native-elements'
import RateEpisodeModal from './RateEpisodeModal';

const ReviewButton = (props) => {

	const [ReviewVisible, setReviewVisible] = useState(false);


	const showReview = () => {
		// ? Visible the spinner
		setReviewVisible(!ReviewVisible)
    
	};


	return (
		<View style={styles.Container}>
			<Button title='Rate Episode' type = 'outline' containerStyle = {styles.containerStyle} titleStyle = {styles.titleStyle} buttonStyle = {styles.buttonStyle} onPress = {showReview}/>
			<RateEpisodeModal isVisible={ReviewVisible} hideModal={showReview.bind(this)} payload ={props.payload} />
			<Button title='Add to a list' type='outline' containerStyle={styles.containerStyle, {paddingLeft: '2%', paddingRight:'2%'}} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle}/>
			<Button title='Share' type='outline' containerStyle={styles.containerStyle} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle}/>
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

export default ReviewButton;