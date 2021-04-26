import SearchBar from "react-native-dynamic-search-bar";
import React,{useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';
import Icon from '../common/Icon';
import { search_url_tv, search_url_people } from '../../constants/urls';
import { apiUrl } from '../../constants/apiurl';
import Tabs from 'react-native-tabs';
const ApiKey = require('../../apikeys.json');




const TheSearchBarContainer = (props) => {

    const [searchText, setsearchText] = useState('');
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [selectedpage, setselectedpage] = useState('TV Shows');

    useEffect(() => {
    if (searchText != ''){
        fetchdata();
    }
    else{
        
        setdata([])
    }

    }, [searchText, selectedpage]);

    const handleOnChangeText = (text) => {
        // ? Visible the spinner
        if (text != ''){
            setsearchText(text)
            setisLoading(true)
        }
        else{

            setisLoading(true)
            setdata([])
        }
    };

    
    const fetchdata = () => {
        let search_url = ''
        switch(selectedpage){
            case 'TV Shows':
                search_url = search_url_tv
                searchExternal(search_url)
                break;
            case 'People':
                search_url = search_url_people
                searchExternal(search_url)
                break;
            case 'List':
                //this.searchInternal('lists')
                break;
            case 'Users':
                searchInternal('users')
                break;
            default:
                search_url = search_url_tv
                break;

        }



    }


    const searchExternal = (search_url) => {


        let url = search_url + ApiKey.TMDBApiKey + '&page=1&query=' + searchText
        fetch(url)
            .then((response) => response.json())
            .then((response) => {setdata(response.results);})
            .catch((error) => console.error(error))
            .then(() => {
                setisLoading(false)
            })

    }

    const searchInternal = (route) => {
        let url = apiUrl + 'search' + '?type=' + route + '&search=' + searchText
        fetch(url)
        .then(async (response) => {
            const data = await response.json()
            setdata(data)
            }
            )
        
        
    } 



    const onClear = () => {
        // ? Visible the spinner
        setsearchText('')
        setisLoading(false)
        setdata([])

    };
    
    const onSelect = (selected) => {
        setselectedpage(selected.props.name)
        setdata([])

    }


        const SearchResults = data.map((item) => {
            if(selectedpage == 'TV Shows'){
            return (
                <View style ={{flexDirection: 'column'}}>
                    <View style ={styles.SearchResult}>
                        <Icon name={item.name} posterpath={item.poster_path} key={item.id} payload={item} showid={item.id} />
                        <View style = {styles.TextView}>
                            <Text>{item.name}</Text> 
                            <Text>{item.overview}</Text> 
                        </View>
                    </View>
                    <View style={styles.Bar}/>
                </View>
                
            )
            }
            else if (selectedpage == 'People') {
                return (
                <View style ={{flexDirection: 'column'}}>
                    <View style ={styles.SearchResult}>
                        <Icon name={item.name} posterpath={item.profile_path} key={item.id} payload={item} type ={'people'} />
                        <View style = {styles.TextView}>
                            <Text>{item.name}</Text> 
                            <Text>{item.known_for_department}</Text>
                                {item.known_for.map((media, index)  => 
                                    <Text key={index}>{media.title} </Text>
                                )} 
                        </View>
                    </View>
                    <View style={styles.Bar}/>
                </View>
                )
                                }
            else {
                return (
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.SearchResult}>
                            <Icon name={item.name} posterpath={item.profile_pic} key={item.id} payload={item} type={'user'} userid ={item.id} />
                            <View style={styles.TextView}>
                                <Text>{item.name}</Text>
                                <Text>{item.username}</Text>
                                <Text>{item.bio}</Text>
                            </View>
                        </View>
                        <View style={styles.Bar} />
                    </View>
                )


            }

        })


        return (
            <View style={{ flexDirection: 'column' }} >
                <View>
                    <SearchBar
                        placeholder="Search"
                        onChangeText={handleOnChangeText}
                        onClearPress={onClear}
                    />
                </View>
                <View style ={{paddingTop:'15%'}}>
                    <View style={styles.Tabcontainer}>
                        <Tabs selected={selectedpage} style={{ backgroundColor: 'white' }}
                            selectedStyle={{ color: 'red' }} onSelect={onSelect} selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>
                            <Text name="TV Shows">TV Shows</Text>
                            <Text name="People" >People</Text>
                            <Text name="Lists">Lists</Text>
                            <Text name="Users" >Users</Text>
                        </Tabs>
                    </View>
                </View>
                <ScrollView style = {{paddingTop: '5%'}}>
                        {SearchResults}
                </ScrollView>

                </View>
        );
    }
const styles = StyleSheet.create({
    SearchResult: {
        flexDirection: 'row',
    },
    InnerText:{
        flexDirection: 'column'
    },
    Bar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    TextView: {
        flex: 1,
    },
    Tabcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default TheSearchBarContainer;