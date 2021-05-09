import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ReviewCard from './ReviewCard'
import { apiUrl } from '../../constants/apiurl';


const ReviewContainer = (props) => {

	const [reviews, setreviews] = useState([]);

	useEffect(() => {
		getreviews()
	}, []);



	function getreviews() {
		fetch(apiUrl + 'getreviews?episodenumber=' + props.episodeinfo.episode_number + '&seasonnumber=' + props.episodeinfo.season_number + '&showid=' + props.showid + '&userid=' + props.userid)
			.then(async (response) => {
				const data = await response.json()
				setreviews(reviews.concat(data))
        
			}
        
			)
	}


	const reviewitems = reviews.map((item, id) => {
		return (
			<View key={id}>
				<ReviewCard episodeinfo={props.episodeinfo} userid={item.userid} reviewid={item.reviewid} name={item.username} review={item.reviewtext} date={item.modified_instant} rating={item.rating} numberofLikes={item.numberofLikes} numberofComments={item.numberofComments} seasonposterurl={props.seasonposterurl} alreadyLiked={item.hasUserLiked == 1 ? true : false}/>
				<View style={styles.Bar} />
			</View>
		)
	})

	return (
		<View style={{ flexDirection: 'column' }} >
			<ScrollView style={{ paddingTop: '5%' }}>
				{reviewitems}
			</ScrollView>

		</View>
	);
}

const styles = StyleSheet.create({
	SearchResult: {
		flexDirection: 'row',
	},
	InnerText: {
		flexDirection: 'column'
	},
	Bar: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	TextView: {
		flex: 1,
	},
	Tabcontainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

export default ReviewContainer;