import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import ReviewCard from '../reviewscreen/ReviewCard'



const TopReviewCard = (props) => {
	const navigation = useNavigation();
	return (
		<View style ={{flex: 1}}>
			<Button title='Latest Review' type='outline' containerStyle={styles.containerStyle} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle} onPress={() => navigation.push('ShowReviewScreen',
				{
					episodeinfo: props.episodeinfo,
					showid: props.showid,
					seasonposterurl: props.seasonposterurl
				})
			} />
			{ props.latestreview.length == 0 ? 
				<Text style = {styles.Text}>No Reviews</Text>
				:
				<ReviewCard episodeinfo = {props.episodeinfo} userid={props.item.userid} reviewid={props.item.reviewid} name={props.item.username} review={props.item.reviewtext} date={props.item.modified_instant} rating={props.item.rating} numberofLikes={props.item.numberofLikes} numberofComments={props.item.numberofComments} seasonposterurl={props.seasonposterurl}alreadyLiked={props.item.hasUserLiked == 1 ? true : false} />
			}
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


export default TopReviewCard;