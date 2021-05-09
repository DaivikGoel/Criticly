import * as React from 'react';
import { View } from '../components/Themed';
import {Button} from 'react-native-elements'
import { StyleSheet, ScrollView} from 'react-native';
import EpisodeInfo from '../components/episodedetail/EpisodeInfo';
import ReviewCard from '../components/reviewscreen/ReviewCard';
import ReviewComments from '../components/fullreviewscreen/ReviewComments';
import ReplyButton from '../components/fullreviewscreen/ReplyButton';


import { AuthContext } from '../constants/AuthContext';



export default function ShowFullReviewScreen({ route }) {

	const context = React.useContext(AuthContext);

  
	const {reviewinfo} = route.params;
	return (
		<View style={styles.child}>
			<ScrollView>
				<EpisodeInfo episodeinfo ={reviewinfo.episodeinfo} seasonposterurl = {reviewinfo.seasonposterurl} userid = {context.userid} />
				<ReviewCard episodeinfo={reviewinfo.episodeinfo} userid={reviewinfo.userid} reviewid={reviewinfo.reviewid} name={reviewinfo.name} review={reviewinfo.review} date={reviewinfo.date} rating={reviewinfo.rating} numberofLikes={reviewinfo.numberofLikes} numberofComments={reviewinfo.numberofComments} seasonposterurl={reviewinfo.seasonposterurl} alreadyLiked={reviewinfo.alreadyLiked} type = {'fullreviewscreen'}/>
				<Button title='Comments' type='outline' containerStyle={styles.containerStyle} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle}/>
				<ReplyButton title='Reply' type='outline' containerStyle={styles.containerStyle} titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle} reviewid={reviewinfo.reviewid} userid = {context.userid} />
				<ReviewComments reviewid ={reviewinfo.reviewid} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	imgContainer: {
		width: '100%', height:'100%',

	},
	child: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	containerStyle: {
		borderColor: '#FFFFFF',
		paddingTop:'5%'
	},
	titleStyle: {
		color: '#FFFFFF'
	},
	buttonStyle: {
		borderColor: '#FFFFFF'
	}

});

