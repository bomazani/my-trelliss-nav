
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Blank');
  const [age, setAge] = useState('0');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Trelliss!</Text>
      <Text>Please enter your name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}
      />


      <Text>Please enter your age:</Text>
      <TextInput
        keyboardType= 'numeric'       
        style={styles.input}
        placeholder='e.g. 99'
        onChangeText={(val) => setAge(val)}
      />



      <Text>Name: {name}, Age: {age}</Text>
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

  title: {
    fontSize: 40,
  },

  input: {
    height: 40,
    width: 200,
    padding: 8,
    margin: 10,
    borderColor: 'grey',
    borderWidth: 1
  },
});
