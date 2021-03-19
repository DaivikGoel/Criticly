import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Tabs from 'react-native-tabs';

class SearchTabs extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 'TV Shows' };
    }
    render() {
        return (
            <View style={styles.Tabcontainer}>
                <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
                    selectedStyle={{ color: 'red' }} onSelect={el => this.setState({ page: el.props.name })} selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>
                    <Text name="TV Shows">TV Shows</Text>
                    <Text name="People" >People</Text>
                    <Text name="Lists">Lists</Text>
                    <Text name="Users" >Users</Text>
                </Tabs>
            </View>
        );
    }
}

export default SearchTabs;

const styles = StyleSheet.create({
    Tabcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});