import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { apiUrl } from '../../constants/apiurl';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

const ReviewCard = (props) => {
    const navigation = useNavigation();

    const [liked, setliked] = useState(props.alreadyLiked);
    const [heartcolor, setheartcolor] = useState(props.alreadyLiked ? 'gold' : 'grey');
    const [numberofLikes, setnumberofLikes] = useState(props.numberofLikes);
    const [showMoreText, setshowMoreText] = useState(false);

    function onLike() {
        if (!liked == true) {
            setheartcolor('gold')
            setnumberofLikes(numberofLikes + 1)
            postReviewLike('add')
        }
        else {
            setheartcolor('grey')
            setnumberofLikes(numberofLikes - 1)
            postReviewLike('remove')
        }
        setliked(!liked)

        }

    function postReviewLike(type){

        fetch(apiUrl + 'postreviewlike', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: type,
                reviewid: props.reviewid,
                userid: props.userid
            })
        })
    }

    const toggleText = () => {
        setshowMoreText(!showMoreText)
    }

        return (
            <View style={{ flex: 1, paddingTop: '5%'}}>
                <TouchableOpacity onPress={
                    props.type == 'fullreviewscreen' ? 
                    () => {} : 
                () => navigation.push('ShowFullReviewScreen'
                ,
                    {
                        reviewinfo: props,
                    })}>
                <View style={{ flexDirection: 'column', paddingLeft: '2%', paddingRight: '2%'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.name}>{props.name}</Text>
                        <View>
                            <AirbnbRating
                                defaultRating={props.rating}
                                isDisabled={true}
                                showRating={false}
                                size={windowHeight / 40}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.Text}>{props.date}</Text>
                    </View>
                        <View style = {{paddingTop: '5%'}}>
                            <Text numberOfLines={showMoreText ? undefined : 4} style={styles.Text}>{props.review}</Text>
                            <Text onPress={toggleText} style={styles.Text}>
                                {showMoreText ? 'read less...' : 'read more...'}
                            </Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <TouchableOpacity onPress = {() => onLike()}>
                            <Ionicons name="heart" backgroundColor="transparent" size={32} color = {heartcolor} />
                        </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.Text, { justifyContent: 'flex-end', height: '100%' }]}>{numberofLikes} likes</Text>

                                <Text style={styles.Text}>{props.numberofComments} Comments</Text>

                        </View>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
        );
    }


const styles = StyleSheet.create({
    Text: {
        color: '#FFFFFF',
    },
    name: {
        color: '#FFFFFF',
        fontSize: Dimensions.get('window').height / 40
    },
    titleStyle: {
        color: '#FFFFFF'
    },
    buttonStyle: {
        borderColor: '#FFFFFF'
    },
    Bar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: '2%'
    },
});

export default ReviewCard;