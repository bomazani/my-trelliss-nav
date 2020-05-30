import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Item 1', key: '1' },
    { text: 'Item 2', key: '2' },
    { text: 'Item 3', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              // item and presshandler are props passed into TodoItem
              // so they can be used in todoItems.js
              < TodoItem item={item} pressHandler={pressHandler} />
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

  list: {
    marginTop: 40,
    marginLeft: 20,
  },

  
});