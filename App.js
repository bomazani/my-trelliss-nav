import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
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

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        // Return a new array that includes the old array (...prevTodos)
        // plus a new object with the new text and a unique id.
        return [
          // Math.random() is not the best option, possible dupe id#s.
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismissed keyboard')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* passing submitHandler as a prop to AddTodo */}
          <AddTodo submitHandler={submitHandler} />
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
    </TouchableWithoutFeedback>
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