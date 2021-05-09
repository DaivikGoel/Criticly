import * as React from 'react';
import { View } from '../components/Themed';
import ShowDetailContainer from '../components/showdetail/ShowDetailContainer'
import { StyleSheet} from 'react-native';
import { AuthContext } from '../constants/AuthContext';


export default function ShowDetailScreen({ route }) {
	const context = React.useContext(AuthContext);
  
	const {showid } = route.params;
	return (
		<View style={styles.imgContainer}>
			<View style={styles.child}>
				<ShowDetailContainer showid ={showid} userid ={context.userid} />
			</View>
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

