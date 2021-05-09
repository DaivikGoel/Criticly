import * as React from 'react';
import { View } from '../components/Themed';
import { StyleSheet, ScrollView} from 'react-native';
import ReviewContainer from '../components/reviewscreen/ReviewContainer';

import { AuthContext } from '../constants/AuthContext';



export default function ShowReviewScreen({ route }) {

	const context = React.useContext(AuthContext);
	const { episodeinfo, showid, seasonposterurl} = route.params;
	return (
		<View style={styles.child}>
			<ScrollView >
				<ReviewContainer episodeinfo={episodeinfo} showid={showid} seasonposterurl={seasonposterurl} userid = {context.userid}/>
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

});

