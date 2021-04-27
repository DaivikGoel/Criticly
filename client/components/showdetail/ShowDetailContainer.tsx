import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Dimensions, Text, ImageBackground, RefreshControl} from 'react-native';
import TVShowInfo from './TVShowInfo';
import SeasonInfo from './SeasonInfo'
import CastAndCrew from '../common/CastAndCrew';
import TVShowRatings from './TVShowRatings';
import WatchListModal from './WatchListModal';
import { apiUrl } from '../../constants/apiurl';
import { original_url, baseV3_url, english_Us_Url } from '../../constants/urls';
const ApiKey = require('../../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ShowDetailContainer = (props) => {
    
	const [showdata, setshowdata] = useState([]);
	const [seasondata, setseasondata] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const [averageRating, setaverageRating] = useState(-1);
	const [ratingsCount, setratingsCount] = useState(-1);
	const [userRating, setuserRating] = useState(-1);

	useEffect(() => {
		let showurl = baseV3_url + props.showid + '?api_key=' + ApiKey.TMDBApiKey + english_Us_Url;
		let seasonurl = baseV3_url + props.showid + '/season/'
		getAggregateReviews();
		fetch(showurl)
			.then((response) => response.json())
			.then((data) => {
				setshowdata(data)
			})
			.then(() => {
				setisLoading(false)
			})
	}, []);


	useEffect(() => {
		if (showdata.length != 0 && seasondata.length === 0 ){
			let showurl = baseV3_url + props.showid + '?api_key=' + ApiKey.TMDBApiKey + english_Us_Url;
			let seasonurl = baseV3_url + props.showid + '/season/'
			console.log('SHOW DATA',showdata)
			showdata.seasons.map(season => 
				fetch(seasonurl + season.season_number + '?api_key=' + ApiKey.TMDBApiKey + english_Us_Url)
					.then((response) => response.json())
					.then((response) => {
						setseasondata(seasondata.concat(response))
					})
			)

		}

	}, [showdata]);



	async function getAggregateReviews() {
		fetch(apiUrl + 'aggregateReviews?showid=' + props.showid + '&type=season' + '&userid=' + props.userid)
			.then(async (response) => {
				const data = await response.json()
				setaverageRating(data[0]['GlobalRating'])
				setratingsCount(data[0]['GlobalCountRating'])
				setuserRating(data[0]['userAverage'])
			}
			)
	}


	const _onRefresh = () => {
		setisLoading(true)
		getAggregateReviews()
			.then(() => {
				setisLoading(false)
			});
	}


	let crediturl = baseV3_url + props.showid + '/credits' + '?api_key=' + ApiKey.TMDBApiKey + english_Us_Url;

	const SeasonLists = seasondata.sort(function (a, b) { return a.season_number - b.season_number; }).map((season) => {
		return (
			<SeasonInfo payload={season} showid={props.showid} averageSeasonRating = {averageRating} userid ={props.userid} />
		)
	})
    
	return (
		<ImageBackground style={styles.imgContainer} source={{ uri: original_url + showdata.backdrop_path }}>
			<View style={{ backgroundColor: 'rgba(0,0,0,0.7)',flex: 1}}>
				<ScrollView
					refreshControl={
						<RefreshControl
							refreshing={isLoading}
							onRefresh={_onRefresh}
						/>
					}>
					{isLoading == false ? 
						<View>
							<View>
								<TVShowInfo payload ={showdata}/>
								<WatchListModal showid={props.showid} userid={props.userid} ></WatchListModal>
								<TVShowRatings averageRating = {averageRating} ratingsCount = {ratingsCount} userRating = {userRating} />
								<Text style={styles.ShowTitle}>Seasons</Text>
								{SeasonLists}
							</View>
							<View style ={{paddingTop:'5%'}}>
								<Text style={styles.ShowTitle}>Cast and Crew</Text>
								<CastAndCrew url ={crediturl}/>
							</View>
						</View>
					 :
						<ActivityIndicator size="large" /> 
                
					}
				</ScrollView>
			</View>
		</ImageBackground>
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
		paddingTop: '10%'
	},
	NetworkIcons: {
		width: windowWidth / 10,
		height: windowHeight / 10,
	},
	imgContainer: {
		width: '100%',
		height: '100%',

	},
});

export default ShowDetailContainer;
