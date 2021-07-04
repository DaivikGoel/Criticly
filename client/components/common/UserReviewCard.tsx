import * as React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import RN from 'react-native';

import { AirbnbRating,  } from 'react-native-elements'
const SCREEN_HEIGHT = RN.Dimensions.get('window').height;



export const UserReviewCard = (props) => {
    
    return (
        <View>
            <Text style={styles.userReviewName}>SpongeBob User <Text style={styles.timestamp}>6 hr ago</Text></Text>
            <View style={styles.reviewCardContainer}>
            <Text style={styles.showName}>Riverdale</Text>
            <Text style={styles.showNumberSeasonNumber}>Season 2, Episode 3</Text>
            <View style={styles.container}>
            <Text style={{flex:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer et dictum ex. Suspendisse congue maximus ex, quis blandit quam.  
            </Text>
            <View style={styles.ratingContainer}>
            <AirbnbRating size={20}
						defaultRating = {2}
                        showRating={false}
                        isDisabled={true}
					/>
            </View>
            </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    reviewCardContainer: {
        backgroundColor:'grey',
        borderWidth: 3,
        borderColor:'grey',
        borderRadius:SCREEN_HEIGHT *0.05 /2,
        margin:10,
        padding:15
    },
    ratingContainer:{
        flex:1, 
        justifyContent: 'flex-end'
    },
    container: {
        flex:1,
        flexDirection: 'row',
	},
	userReviewName: {
		color: 'orange',
        paddingLeft:5
	},
    timestamp:{
        color: 'grey'
    },
	showName: {
		fontWeight: 'bold'
	},
    showNumberSeasonNumber:{
        paddingBottom: 15
    }
});

