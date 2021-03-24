import SearchBar from "react-native-dynamic-search-bar";
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, View, Text, Dimensions, ImageBackground} from 'react-native';
import Poster from './Poster';
import { search_url_tv, search_url_people } from '../constants/urls';
import { people_url } from '../constants/urls';
import { Image } from 'react-native-elements'
import ReviewButton from "./ReviewButton";
const ApiKey = require('../apikeys.json');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        paddingLeft:'3%',
        flex: 1,

    },
    ImageOpacity:{
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    imgContainer: {
        width: '100%', 
        height: '100%'

    },
});

export default class PeopleInfo extends Component<{}, { persondetails: Array<any>, isLoading: boolean, showMoreText: boolean}> {

    constructor(props) {
        super(props);
        this.state = {
            persondetails: [],
            isLoading: true,
            showMoreText: false

        };
    }
    
    componentDidMount() {
        let detailsurl = people_url + this.props.person.id + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US";
        fetch(detailsurl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    persondetails: data
                }, () => console.log(this.state.persondetails));
            })
            .then(() => {
                this.setState({ isLoading: false });
            })
    }
    
    toggleText = () => {   
        this.setState({ showMoreText: !this.state.showMoreText });
    }

    render(){
        return (
        <View style ={{flex: 1}}>
                <View style = {styles.ImageOpacity}>
                    <View style={styles.TitleView}>
                        <Poster url ={this.props.profilepic}/>
                        <View style={{ flexDirection: 'column', paddingLeft: '5%'}}>
                            <Text style={styles.ShowTitle}>{this.props.person.name}</Text>
                            <Text style={styles.Text}>Known for: {this.props.person.known_for_department}</Text>
                            <Text style={styles.Text} numberOfLines={this.state.showMoreText ? undefined : 4 }>{this.state.persondetails.biography}</Text>
                            <Text onPress={this.toggleText} style={styles.Text}>
                                {this.state.showMoreText ? 'read less...' : 'read more...'}
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
        )
    }
}