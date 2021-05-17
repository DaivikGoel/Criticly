import React from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Dimensions } from 'react-native';
import Poster from '../common/Poster';
import { original_url } from '../../constants/urls';
import { Image } from 'react-native-elements'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Payload } from '../../interfaces/interfaces';


const TVShowInfo = (props: Payload) => {
	return (
		<View style={styles.TitleView}>
			<Poster url={original_url + props.poster_path} />
			<View style={{ flexDirection: 'column', paddingLeft: '5%' }}>
				<Text style={styles.ShowTitle}>{props.name}</Text>
				<Text style={styles.Text}>{props.number_of_seasons} Seasons </Text>
				<Text style={styles.Text}>{props.number_of_episodes} Episodes </Text>
				<Text style={styles.Text}>Last Air Date: {props.last_air_date} </Text>
				<Text style={styles.Text}>Status: {props.status} </Text>
				<Image style={styles.NetworkIcons} source={{ uri: original_url + props.networks[0].logo_path }} PlaceholderContent={<ActivityIndicator />} />
			</View>
		</View>
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
		paddingTop: '10%',
		paddingLeft: '3%'
	},
	NetworkIcons: {
		width: windowWidth / 5,
		height: windowHeight / 10,
		resizeMode: 'contain',
		tintColor: 'white'
	}
});
export default TVShowInfo;