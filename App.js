
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Bob', key: '1'},
    { name: 'Yoshi', key: '2'},
    { name: 'Mario', key: '3'},
    { name: 'Luigi', key: '4'},
    { name: 'Peach', key: '5'},
    { name: 'Toad', key: '6'},
    { name: 'Bowser', key: '7'},
  ]);

  return (
    <View style={styles.container}>
      <Text>Trelliss List Page!</Text>

      {/* Javascript needs to be inside curly braces */}
      { people.map((item) => {
        return (
          <View key={item.key}>
            {/* Each child in a list should have a unique id# so we added 'key' to the parent View. */}
            <Text style={styles.item}>
              {item.name}
            </Text>
          </View>
        )
      })}

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
    marginTop: 24,
    padding: 30,
    backgroundColor: 'lightblue',
    fontSize: 24,
  }
});
