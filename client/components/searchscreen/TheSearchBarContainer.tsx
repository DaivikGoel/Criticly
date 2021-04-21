import SearchBar from "react-native-dynamic-search-bar";
import React from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';
import Icon from '../common/Icon';
import { search_url_tv, search_url_people } from '../../constants/urls';
import { apiUrl } from '../../constants/apiurl';
import Tabs from 'react-native-tabs';
const ApiKey = require('../../apikeys.json');


let types = [["TV Shows", search_url_tv], ["Actors", search_url_people]];


export default class TheSearchBarContainer extends React.Component<{}, { data: Array<any>, searchText: string, isLoading: boolean, selectedpage: string}> {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            data : [],
            isLoading: false,
            selectedpage: 'TV Shows'
        };
    }
    handleOnChangeText = (text) => {
        // ? Visible the spinner
        if (text != ''){
            this.setState({
                searchText: text,
                isLoading: true

            }, () => {
                    this.fetchdata();
            });
            


        }
        else
            this.setState({
                searchText: '',
                isLoading: false,
                data: []
            });

    };

    
    fetchdata = () => {
        let search_url = ''
        switch(this.state.selectedpage){
            case 'TV Shows':
                search_url = search_url_tv
                this.searchExternal(search_url)
                break;
            case 'People':
                search_url = search_url_people
                this.searchExternal(search_url)
                break;
            case 'List':
                //this.searchInternal('lists')
                break;
            case 'Users':
                this.searchInternal('users')
                break;
            default:
                search_url = search_url_tv
                break;

        }



    }


    searchExternal = (search_url) => {


        let url = search_url + ApiKey.TMDBApiKey + '&page=1&query=' + this.state.searchText
        fetch(url)
            .then((response) => response.json())
            .then((response) => { this.setState({ data: response.results }); })
            .catch((error) => console.error(error))
            .then(() => {
                this.setState({ isLoading: false });
            })

    }

    searchInternal = (route) => {
        let url = apiUrl + 'search' + '?type=' + route + '&search=' + this.state.searchText
        fetch(url)
        .then(async (response) => {
            const data = await response.json()
            this.setState({ data: data })
            }
            )
        
        
    } 



    onClear = () => {
        // ? Visible the spinner
        this.setState({
            searchText: '',
            isLoading: false,
            data: [],
        });

    };
    
    onSelect = (selected) => {
        
        this.setState({ selectedpage: selected.props.name, data: [] }, 
            () =>{
            if(this.state.searchText != '')
                this.fetchdata()
            });

    }


    render() {
        const SearchResults = this.state.data.map((item) => {
            if(this.state.selectedpage == 'TV Shows'){
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
            else if (this.state.selectedpage == 'People') {
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
                        onChangeText={this.handleOnChangeText}
                        onClearPress={this.onClear}
                    />
                </View>
                <View style ={{paddingTop:'15%'}}>
                    <View style={styles.Tabcontainer}>
                        <Tabs selected={this.state.selectedpage} style={{ backgroundColor: 'white' }}
                            selectedStyle={{ color: 'red' }} onSelect={this.onSelect} selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>
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