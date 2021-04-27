import * as React from 'react';
import ProfileInfo from '../components/profilescreen/ProfileInfo'

export default function UserScreen({ route }) {

	const { userid } = route.params;
	return (
		<ProfileInfo personid = {userid}/>
	);
}