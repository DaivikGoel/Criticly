import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Poster from '../common/Poster';
import { people_url } from '../../constants/urls';
const ApiKey = require('../../apikeys.json');


const PeopleInfo = (props) => {

    const [persondetails, setpersondetails] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [showMoreText, setshowMoreText] = useState(false);


    useEffect(() => {
        let detailsurl = people_url + props.person.id + "?api_key=" + ApiKey.TMDBApiKey + "&language=en-US";
        fetch(detailsurl)
            .then((response) => response.json())
            .then((data) => {
                setpersondetails(data)
            })
            .then(() => {
                setisLoading(false)
            })
    }, []);
    
    
    const toggleText = () => {   
        setshowMoreText(!showMoreText)
    }

    return (
        <View style ={{flex: 1}}>
                <View style = {styles.ImageOpacity}>
                    <View style={styles.TitleView}>
                        <Poster url ={props.profilepic}/>
                        <View style={{ flexDirection: 'column', paddingLeft: '5%'}}>
                            <Text style={styles.ShowTitle}>{props.person.name}</Text>
                            <Text style={styles.Text}>Known for: {props.person.known_for_department}</Text>
                            <Text style={styles.Text} numberOfLines={showMoreText ? undefined : 4 }>{persondetails.biography}</Text>
                            <Text onPress={toggleText} style={styles.Text}>
                                {showMoreText ? 'read less...' : 'read more...'}
                            </Text>
                        </View>
                    </View>
                </View>
        </View>
    )
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
        paddingLeft: '3%',
        flex: 1,

    },
    ImageOpacity: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    imgContainer: {
        width: '100%',
        height: '100%'

    },
});

export default PeopleInfo;