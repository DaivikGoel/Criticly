import AsyncStorage from '@react-native-async-storage/async-storage';


export async function saveItem(selectedValue) {
    try {
        await AsyncStorage.setItem('userid', selectedValue);
    } catch (error) {
        console.error('AsyncStorage error: ' + error.message);
    }
}

export async function readItem() {
    try {
        const value = await AsyncStorage.getItem('userid');
            return value

    } catch (error) {
        console.error('AsyncStorage error: ' + error.message);
    }
}


export async function userLogout() {
    try {
      await AsyncStorage.removeItem('userid');
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
