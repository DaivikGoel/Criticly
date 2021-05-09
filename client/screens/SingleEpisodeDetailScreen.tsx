import * as React from 'react';
import { View } from '../components/Themed';
import { original_url, baseV3_url } from '../constants/urls';
import { StyleSheet, ScrollView} from 'react-native';
import EpisodeInfo from '../components/episodedetail/EpisodeInfo'
import EpisodeRatings from '../components/episodedetail/EpisodeRatings'
import TopReviews from '../components/episodedetail/TopReviews';
import CastAndCrew from '../components/common/CastAndCrew';
import { AuthContext } from '../navigation/RootNavigator'
const ApiKey = require('../apikeys.json');

export default function SingleEpisodeDetailScreen({ route }) {
    
	const context = React.useContext(AuthContext);
  
	const { episodeinfo,seasoninfo, showid, averageSeasonRating} = route.params;

	let episodedetailsurl = baseV3_url + showid + '/season/' + seasoninfo.season_number + '/episode/' + episodeinfo.episode_number + '/credits' + '?api_key=' + ApiKey.TMDBApiKey;
    

	return (
		<View style={styles.child}>
			<ScrollView > 
				<EpisodeInfo episodeinfo={episodeinfo} seasonposterurl={original_url + seasoninfo.poster_path} showid={showid} seasoninfo={seasoninfo} type='review' userid={context.userid}/>
				<EpisodeRatings averageSeasonRating={averageSeasonRating} episodeinfo={episodeinfo} showid={showid} userid={context.userid} />
				<TopReviews episodeinfo={episodeinfo} showid={showid} seasonposterurl={original_url + seasoninfo.poster_path} userid ={context.userid} />
				<CastAndCrew url ={episodedetailsurl}/> 
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	imgContainer: {
		width: '100%', height: '100%',

	},
	child: {
		flex: 1,
		backgroundColor: 'rgb(0,0,0)',
	},

});

