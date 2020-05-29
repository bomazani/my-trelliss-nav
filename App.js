
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text>Trelliss List Page!</Text>

      <FlatList
        numColumns={ 2 }
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name}
          </Text>
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
