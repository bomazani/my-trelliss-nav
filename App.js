
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

      {/* FlatList renders items as you scroll down, good for performance. */}
      {/* FlatList automatically looks for a 'key', */}
      {/* so we don't need to specify one, like in ScrollView. */}
      <FlatList
        // if id exists instead of key use keyExtractor as below.
        keyExtractor={(item) = item.id }
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name}
          </Text>
        )}
      />

      {/* ScrollView renders all items at once. */}
      {/* <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>
                {item.name}
              </Text>
            </View>
        ))}
      </ScrollView>  */}
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 35,
    padding: 30,
    backgroundColor: 'lightblue',
    fontSize: 30,
  }
});
