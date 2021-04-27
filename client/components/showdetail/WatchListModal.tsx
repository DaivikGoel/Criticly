import React, {useState} from 'react';
import {Button , View, Text} from 'react-native';
import Modal from 'react-native-modal';
import { apiUrl } from '../../constants/apiurl';
import CreateListModal from './CreateListModal';

function WatchListModal(showid: number, userid: number ) {
	const [isModalVisible, setModalVisible] = useState(false);
	const [userLists, setUserLists] = useState<any[]>([])
	const useridKey = JSON.stringify(Object.values(showid)[1]);

	React.useEffect(() => {
		fetch(apiUrl + 'getListItem?userid='+  useridKey)
			.then(results => results.json())
			.then(data => {
				console.log(data);
				if(data != undefined){
					setUserLists(data);
				}
				else
					setUserLists([]);
			}

			);
	}, []);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const addToWatchList= () => {
		fetch(apiUrl + 'postListItem', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userid: Object.values(userid),
				listtype: 'watchlist',
				title: 'action movies',
				showid: Object.values(showid)
			})
		});
	}

	return (
		<View style={{flex: 1}}>
			<Button title="Add To list" onPress={toggleModal} />

			<Modal isVisible={isModalVisible}>
				<View style={{flex: 1}}>
					<Button title="Add to watchlist" onPress ={addToWatchList} />
					<Text style={{color:'white'}}>My Current Lists</Text>
					{userLists.map(listItem => (
						<Button key={listItem.iduser_lists} title={listItem.title} onPress={() => addToWatchList()}> </Button>
					))}
					<CreateListModal userid = {JSON.parse(useridKey)}></CreateListModal>
					<Button title="Close modal" onPress={toggleModal} />
				</View>
			</Modal>
		</View>
	);
}

export default WatchListModal;