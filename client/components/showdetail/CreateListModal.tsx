import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

function CreateListModal() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addToWatchList= () => {
    
    alert("Hello create list");
}

  return (
    <View style={{flex: 1}}>
      <Button title="Add To list" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
            <Button title="List Name" onPress={toggleModal} />
          <Button title="Close modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default CreateListModal;