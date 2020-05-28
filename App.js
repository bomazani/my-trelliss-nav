import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// App is the root component of the app.
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Trelliss!</Text>
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
