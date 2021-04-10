import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import { apiUrl } from '../../constants/apiurl';

function WatchListModal() {
  const [isModalVisible, setModalVisible] = useState(false);

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
            userid: '10',
            listtype: "watchlist",
            title: "action movies"
        })
    })
    
    alert("Hello world");
}

  return (
    <View style={{flex: 1}}>
      <Button title="Add To list" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Button title="Add to watchlist" onPress ={addToWatchList} />
          <Button title="Add to LGBTQ list" />
          <Button title="Add to anime shows" />
          <Button title="Close modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default WatchListModal;