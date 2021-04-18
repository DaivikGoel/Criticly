import React, {useState} from 'react';
import {Button, TextInput, Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { apiUrl } from '../../constants/apiurl';

function CreateListModal(userid: number) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [listNameInput, setTextInput] = React.useState('');
  const useridKey = Object.values(userid)[0]


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addToWatchList= (textInput: string) => {
    fetch(apiUrl + 'postUserList', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          userid: useridKey,
          listname: textInput,
      })
  })
}

  return (
    <View style={{flex: 1}}>
      <Button title="Create new list" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <Text style= {styles.listNameLabel}>List Name</Text>
        <View style={{flex: 1}}>
        <TextInput
          value = {listNameInput}
          style = {styles.input}
          placeholder='Enter a name for your List'
          placeholderTextColor = 'white'
          multiline={true}
          textAlignVertical = 'top'
          onChangeText={text => setTextInput(text)}
          />
          <Button title="Add to my lists"  onPress={() => addToWatchList(listNameInput)}></Button>
          <Button title="Close modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}


export default CreateListModal;

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1,
     color: 'white'
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  },
  listNameLabel: {
    backgroundColor: "purple", 
    color: "white",
    padding:'5%'
  }
})