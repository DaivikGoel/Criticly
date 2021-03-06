import * as React from 'react';
import { StyleSheet, ScrollView} from 'react-native';

import List from '../components/common/List';
import { View } from '../components/Themed';
import {trending_url, topRated_url, popular_url} from '../constants/urls'
const ApiKey = require('../apikeys.json');
import { Button, Text } from 'react-native-elements'

let lists = [['Trending', trending_url + ApiKey.TMDBApiKey + '&page=1'], 
	['Top Rated', topRated_url + ApiKey.TMDBApiKey + '&page=1'], 
	['Popular', popular_url + ApiKey.TMDBApiKey + '&page=1'] ];

import { AuthContext } from '../constants/AuthContext';
import { userLogout } from '../utils/PersistantAuth'
import { UserReviewCard } from '../components/common/UserReviewCard';


export default function HomeScreen() {
	const context = React.useContext(AuthContext);


	function LogOut() {

		userLogout()
		context.setisSignedIn(false)

	}

  

	const Lists = lists.map((item) => {
		return (
			<List name={item[0]} url={item[1]} type ='tv' key={item[0]}/>
		)
	})
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>Hello, User</Text>
			<ScrollView style = {styles.scrollstyle}>
				<UserReviewCard/>
				{Lists}
				<Button title='Logout' type='outline' onPress={() => LogOut()} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent:'space-evenly',
		backgroundColor: 'rgba(0, 0, 0, 0.8)'
	},
	scrollstyle: {
		marginTop: 50
	},
	textStyle: {
		color: 'orange',
		fontSize: 22,
	}
});
