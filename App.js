
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Bob', id: '1'},
    { name: 'Yoshi', id: '2'},
    { name: 'Mario', id: '3'},
    { name: 'Luigi', id: '4'},
    { name: 'Peach', id: '5'},
    { name: 'Toad', id: '6'},
    { name: 'Bowser', id: '7'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
  }

  return (
    <View style={styles.container}>
      <Text>Trelliss Touchable Components Page!</Text>

      <FlatList
        numColumns={ 2 }
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          // TouchableOpacity can have its own style prop.
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 35,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'lightblue',
    fontSize: 30,
  }
});
