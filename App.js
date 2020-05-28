
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Bob');
  // Added a person object to state
  const [person, setPerson] = useState({ name: 'Mario', age: 40});

  const clickHandler = () => {
    setName('Mason');
    // aded setPerson to change name and age when button is clicked.
    setPerson({name: 'Bob', age: 54})
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to Trelliss!</Text>
      <Text>My name is {name}.</Text>
      {/* Used the person state to complete the text. */}
      <Text>The other person's name is {person.name} and their age is {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'grey',
  }
});
