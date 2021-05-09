import React, { useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from './Icon';



const List = (props) => {

	const[isLoading, setisLoading] = useState(true);
	const[data, setdata] = useState([]);

	useEffect(() => {
		fetch(props.url)
			.then((response) => response.json())
			.then((response) => {
				switch (props.type) {
				case 'tv':
					setdata(response.results)
					break;
				case 'cast':
					setdata(response.cast)
					break;
				case 'crew':
					setdata(response.crew)
					break;
				default:
					setdata(response.results)
					break;

				}
			}
			)
			.catch((error) => console.error(error))
			.then(() => {
				setisLoading(false)
			})
	}, []);


	const Icons = data.sort(function (a, b) { return b.popularity - a.popularity; }).map((item, id) => {
		return (
			<Icon key={id} name= {item.name} posterpath = {item.poster_path} key ={item.id} payload = {item} showid ={item.id} />
		)
	})

	return (
		<View style = {styles.container}>
			<Text style ={styles.title}> {props.name} </Text>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={200}
				decelerationRate="fast"
				style = {{backgroundColor: 'transparent'}}
			>
				{Icons}    
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	title:
  {
  	fontSize: 30,
  	color: 'white'
  }

});

export default List;



