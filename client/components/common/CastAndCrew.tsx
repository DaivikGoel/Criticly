import { StyleSheet, View, Text } from 'react-native';
import React, {Component} from 'react';
import CollapsibleList from "react-native-collapsible-list";
import CrewCastListItem from './CrewCastListItem';

const styles = StyleSheet.create({
    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 20,
        overflow: "hidden",
        backgroundColor: "#FFF",
        borderRadius: 5
    },
    collapsibleItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#CCC",
        padding: 10
    }
});
export default class CastAndCrew extends Component<{ url: string }, { cast: Array<any>, crew: Array<any>,isLoading: boolean }> {

    constructor(props) {
        super(props);
        this.state = {
            cast: [],
            isLoading: true,
            crew: []
        };
    }

    componentDidMount() {
        fetch(this.props.url)
            .then((response) => response.json())
            .then((response) => { this.setState({ cast: response.cast, crew: response.crew }) })
            .catch((error) => console.error(error))
            .then(() => {
                this.setState({ isLoading: false });
            })
    }


    render() {

    const cast = this.state.cast.map((member) => {
        return (
            <CrewCastListItem name={member.name} role={member.character} payload={member}/>
        )
    })
    const crew = this.state.crew.map((member) => {
        return (
            <CrewCastListItem name={member.name} role={member.job} payload = {member}/>
        )
    })

    return (
        <View >
            <CollapsibleList
                numberOfVisibleItems={0}
                wrapperStyle={styles.wrapperCollapsibleList}
                buttonPosition='top'
                buttonContent={
                    <View>
                        <View style={styles.collapsibleItem}>
                            <Text>Cast</Text>
                        </View>
                    </View>
                }
            >
            {cast}
            </CollapsibleList>
            <CollapsibleList
                numberOfVisibleItems={0}
                wrapperStyle={styles.wrapperCollapsibleList}
                buttonPosition='top'
                buttonContent={
                    <View>
                        <View style={styles.collapsibleItem}>
                            <Text>Crew</Text>
                        </View>
                    </View>
                }
            >
                {crew}
            </CollapsibleList>
        </View>
        );
    }
}