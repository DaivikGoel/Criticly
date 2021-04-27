import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import { AirbnbRating } from 'react-native-elements'

const ApiKey = require('../../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import { apiUrl } from '../../constants/apiurl';
import UserMetaData from './UserMetaData';
import Icon from '../common/Icon'


const ProfileInfo = (props) => {
	const [payload, setPayLoad] = useState({
		userInfo: [],
		userStats : {},
		userWatchList : [],
		recentlyReviewed: [],
		isloading: true,
		icons : []
	})
    

	useEffect(() => {
		async function fetchInfoAndStats() {
			let userInfo = await fetch(apiUrl + 'getuserinfo?userid=' + props.personid)
				.then(async (response) => {
					var data = await response.json();
					data = data[0];
					return data;
				});
			let userStats = await fetch(apiUrl + 'getuserstats?userid=' + props.personid + '&type=reviews')
				.then(async (response) => {
					var data = await response.json();
					data = data[0];
					return {numberofreviews: data['COUNT(*)']}
				});
			let watchListData  = await fetch(apiUrl + 'getListItem?userid=' + props.personid)
				.then(async (response) => {
					var data = await response.json();
					return data;
				});
			let recentlyReviewed = await  fetch(apiUrl + 'getreviews?userid=' + props.personid + '&type=user')
				.then(async (response) => {
					var data = await response.json();
					return data;
				}).then();
			let isLoading: boolean =  recentlyReviewed.forEach(item => 
				fetch('https://api.themoviedb.org/3/tv/' + item.showid + '/season/' + item.seasonnumber + '?api_key=' + ApiKey.TMDBApiKey + '&language=en-US')
					.then(async (response) => {
						var data = await response.json();
						item.showdata = data;
						//forceUpdate();
						return false;
					}
					)
			
			)
			const icons = recentlyReviewed.map((listItem) => {
				var poster_path
				var episodename
				if(typeof listItem.showdata == 'undefined'){
					poster_path = null
					episodename = null 
				}
				else {
					poster_path = listItem.showdata.poster_path
					episodename = listItem.showdata.episodes[listItem.episodenumber - 1].name
				}
				return (
					<View>
						<Icon key={listItem.id} showid={listItem.showid} posterpath={poster_path}/>
						<Text style={styles.userreview} numberOfLines ={1}>{episodename}</Text>
						<AirbnbRating
							defaultRating={listItem.rating}
							isDisabled={true}
							showRating={false}
							size={windowHeight / 70}
						/>
					</View>
				)
			});
			setPayLoad({...payload, 
				userInfo:userInfo, 
				userStats: userStats,
				userWatchList: watchListData,
				recentlyReviewed: recentlyReviewed,
				isloading: isLoading,
				icons:icons})
			console.log(icons);
		}
		fetchInfoAndStats()
	}, []);
	return (
		<View style={styles.container}>
			<UserMetaData payload = {payload} />
			<Text style={styles.header}>My Watchlist</Text>
			<View style={styles.reviewcontainer}>
				<Text style={styles.header}>Recently Reviewed</Text>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={200}
					decelerationRate="fast"
					style={{ backgroundColor: 'transparent' }}
				>
					{payload.icons}
				</ScrollView>
			</View>
		</View>
	)
}
    


const styles = StyleSheet.create({
	displayPic: {
		width: 100,
		height: 100,
		borderRadius: 400 / 2
	},
	header: {
		paddingTop: '5%',
		fontSize: 30,
		color: 'white'
	},
	bio: {
		paddingTop: '5%',
		fontSize: 20, 
		color: 'white'
	},
	userstatscontainer:{
		flexDirection: 'row',
		alignContent: 'space-between',
		paddingTop:'5%'
	},
	container: {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',

		width: '100%',
		height: '100%'
	},
	reviewcontainer: {
		backgroundColor: 'transparent',
		flex:1

	},
	userreview: {
		fontSize: 15,
		color: 'white',
		textAlign: 'center',
		width: windowWidth / 4
	},
});

export default ProfileInfo ;
