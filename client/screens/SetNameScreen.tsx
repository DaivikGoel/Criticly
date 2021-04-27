import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../components/loginscreen/FormInput';
import FormButton from '../components/loginscreen/FormButton';
import { apiUrl } from '../constants/apiurl';
import { saveItem } from '../utils/PersistantAuth'
import { AuthContext } from '../navigation/RootNavigator'
//test

export default function SetNameScreen({route}) {
	const [name, setname] = useState('');
	const [username, setusername] = useState('');
	const [profilepic, setprofilepic] = useState('');
	const [bio, setbio] = useState('');
	const context = React.useContext(AuthContext);

	const { email } = route.params;
	function register() {
		fetch(apiUrl + 'register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name, 
				username: name,
				email:email, 
				profile_pic: profilepic,
				bio: bio
			})
		})
			.then(() => {
				fetch(apiUrl + 'getuserid?email=' + email)
					.then(async (response) => {
						var data = await response.json()
						data = data[0]
						const id = data.id
						saveItem(JSON.stringify(id))
						context.setUserid(data.id)
						context.setisSignedIn(true)
					}
					)
			}

			)

	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Create an account</Text>
			<FormInput
				value={name}
				placeholderText='Name'
				onChangeText={name => setname(name)}
				autoCapitalize='none'
				autoCorrect={false}
			/>
			<FormInput
				value={username}
				placeholderText='Username'
				onChangeText={username => setusername(username)}
			/>
			<FormInput
				value={profilepic}
				placeholderText='Profile Pic Image Link'
				onChangeText={profilepic => setprofilepic(profilepic)}
			/>
			<FormInput
				value={bio}
				placeholderText='Set Bio'
				onChangeText={bio => setbio(bio)}
			/>
			<FormButton buttonTitle='Register' onPress={() => register()} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f5f5f5',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		marginBottom: 10
	}
});