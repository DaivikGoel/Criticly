import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions} from 'react-native'; 
import { apiUrl } from '../../constants/apiurl';


const ReviewComments = (props) => {

    const [comments, setcomments] = useState([]);

    useEffect(() => {
        getComments()
    }, []);


    function getComments() {
        fetch(apiUrl + 'getreviewcomments?reviewid=' + props.reviewid)
        .then(async (response) => {
        const data = await response.json()
        setcomments(data)
        }
        
        )
    }


    const commentitems = comments.map((item) => {
            return (
                <View>
                    <View style={{ flexDirection: 'column', paddingLeft: '2%', paddingRight: '2%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.name}>{item.username}</Text>
                            <View>
                                <Text style={styles.Text}>{item.created_instant}</Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: '5%' }}>
                            <Text style={styles.Text}>{item.reviewcomment}</Text>
                        </View>
                        <View style ={styles.Bar} />
                    </View>
                </View>
            )
        })
        
    return (
        <View style={{ flexDirection: 'column' }} >
            <ScrollView style={{ paddingTop: '5%' }}>
                {commentitems}
            </ScrollView>

        </View>
    );
    }

const styles = StyleSheet.create({
    SearchResult: {
        flexDirection: 'row',
    },
    InnerText: {
        flexDirection: 'column'
    },
    Bar: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingTop: '5%',
    },
    TextView: {
        flex: 1,
    },
    Tabcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }, Text: {
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
});

export default ReviewComments;