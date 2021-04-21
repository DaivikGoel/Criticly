import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { apiUrl } from '../../constants/apiurl';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

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
        paddingTop:'2%'
    },
});

class ReviewCard extends React.Component<{}, { liked: boolean, heartcolor: string, numberofLikes: number, showMoreText: boolean}> {
    
    constructor(props) {
        super(props);
        this.state = {
            liked: props.alreadyLiked,
            heartcolor: props.alreadyLiked ? 'gold' : 'grey',
            numberofLikes: props.numberofLikes,
            showMoreText: false


        };
    }

    onLike() {

        this.setState({ liked: !this.state.liked }, () => {

            if (this.state.liked == true) {
                this.setState({ heartcolor: 'gold', numberofLikes: this.state.numberofLikes + 1 })
                this.postReviewLike('add')
            }
            else{
                this.setState({ heartcolor: 'grey', numberofLikes: this.state.numberofLikes - 1})
                this.postReviewLike('remove')
            }
        }
        )
    }

    postReviewLike(type){

        fetch(apiUrl + 'postreviewlike', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: type,
                reviewid: this.props.reviewid,
                userid: this.props.userid
            })
        })
    }

    toggleText = () => {
        this.setState({ showMoreText: !this.state.showMoreText });
    }

    render(){
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, paddingTop: '5%'}}>
                <TouchableOpacity onPress={
                    this.props.type == 'fullreviewscreen' ? 
                    () => {} : 
                () => navigation.push('ShowFullReviewScreen'
                ,
                    {
                        reviewinfo: this.props,
                    })}>
                <View style={{ flexDirection: 'column', paddingLeft: '2%', paddingRight: '2%'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <View>
                            <AirbnbRating
                                defaultRating={this.props.rating}
                                isDisabled={true}
                                showRating={false}
                                size={windowHeight / 40}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.Text}>{this.props.date}</Text>
                    </View>
                        <View style = {{paddingTop: '5%'}}>
                            <Text numberOfLines={this.state.showMoreText ? undefined : 4} style={styles.Text}>{this.props.review}</Text>
                            <Text onPress={this.toggleText} style={styles.Text}>
                                {this.state.showMoreText ? 'read less...' : 'read more...'}
                            </Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <TouchableOpacity onPress = {() => this.onLike()}>
                            <Ionicons name="heart" backgroundColor="transparent" size={32} color = {this.state.heartcolor} />
                        </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.Text, { justifyContent: 'flex-end', height: "100%" }]}>{this.state.numberofLikes} likes</Text>

                                <Text style={styles.Text}>{this.props.numberofComments} Comments</Text>

                        </View>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
        );
    }
}
export default function (props) {
    const navigation = useNavigation();

    return <ReviewCard {...props} navigation={navigation} />;
}