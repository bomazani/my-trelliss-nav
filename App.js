// import 'useState'
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// App is the root component of the app.
export default function App() {
  // Add some state: 'name' is the actual piece of state, 'setName' is a function that allows us to update 'name' in the future.
  // We set the initial value of 'name' to 'Bob'.
  const [name, setName] = useState('Bob');

  return (
    <View style={styles.container}>
      <Text>Welcome to Trelliss!</Text>
      {/* Use state to fill in name. */}
      <Text>My name is {name}.</Text>
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
});
