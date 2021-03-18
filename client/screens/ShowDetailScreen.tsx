import * as React from 'react';
import { Text, View } from '../components/Themed';


export default function ShowDetailScreen({ route }) {
    const { itemId, otherParam, payload } = route.params;
    console.log(payload)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{JSON.stringify(payload)}</Text>
      </View>
    );
  }

