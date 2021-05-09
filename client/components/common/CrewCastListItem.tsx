import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text  } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';



const CrewCastListItem = (props) => {
	const navigation = useNavigation();
	return (
		<View style={styles.collapsibleItem}>
			<TouchableOpacity onPress={() => navigation.push('ShowPeopleScreen',
				{
					person: props.payload
				})
			}>
				<Text>{props.name}</Text>
				<Text style={{ textAlign: 'right' }}>{props.role}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},

	Logo: {
		width: windowWidth / 5,
		height: windowHeight / 6,
	},
	IconText: {
		color: 'white',
		textAlign: 'center',


	},
	collapsibleItem: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: '#CCC',
		padding: 10
	}

});
export default CrewCastListItem;