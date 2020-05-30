import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Item 1', key: '1' },
    { text: 'Item 2', key: '2' },
    { text: 'Item 3', key: '3' },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },

  content: {
    marginTop: 40,
    marginLeft: 20,
  },

  
});