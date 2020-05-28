
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('NoName');
  const [age, setAge] = useState('0');

  const clickHandler = () => {
    setName('Mason');
    setPerson({name: 'Bob', age: 54})
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to Trelliss!</Text>
     
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
  }
});
