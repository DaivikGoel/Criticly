import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect} from 'react';
import CollapsibleList from 'react-native-collapsible-list';
import CrewCastListItem from './CrewCastListItem';


const CastAndCrew = (props) => {

	const [isLoading, setisLoading] = useState(true);
	const [cast, setcast] = useState([]);
	const [crew, setcrew] = useState([]);

	useEffect(() => {
		fetch(props.url)
			.then((response) => response.json())
			.then((response) => {
				setcast(response.cast)
				setcrew(response.crew)
			})
			.catch((error) => console.error(error))
			.then(() => {
				setisLoading(false)
			})
	}, []);


	const castitem = cast.map((member,id ) => {
		return (
			<CrewCastListItem key={id} name={member.name} role={member.character} payload={member}/>
		)
	})
	const crewitem = crew.map((member,id) => {
		return (
			<CrewCastListItem key ={id} name={member.name} role={member.job} payload = {member}/>
		)
	})

	return (
		<View >
			<CollapsibleList
				numberOfVisibleItems={0}
				wrapperStyle={styles.wrapperCollapsibleList}
				buttonPosition='top'
				buttonContent={
					<View>
						<View style={styles.collapsibleItem}>
							<Text>Cast</Text>
						</View>
					</View>
				}
			>
				{castitem}
			</CollapsibleList>
			<CollapsibleList
				numberOfVisibleItems={0}
				wrapperStyle={styles.wrapperCollapsibleList}
				buttonPosition='top'
				buttonContent={
					<View>
						<View style={styles.collapsibleItem}>
							<Text>Crew</Text>
						</View>
					</View>
				}
			>
				{crewitem}
			</CollapsibleList>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapperCollapsibleList: {
		flex: 1,
		marginTop: 20,
		overflow: 'hidden',
		backgroundColor: '#FFF',
		borderRadius: 5
	},
	collapsibleItem: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: '#CCC',
		padding: 10
	}
});

export default CastAndCrew;