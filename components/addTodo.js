// useState is a state hook, so we can keep track
// of what a user is typing into a specific input.
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo() {
    // Creates a piece of state that tracks what user types
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='New ToDo Item'
                // onChange automatically grabs the value (val) for use in changeHandler function.
                onChangeText={changeHandler}
            />
            <Button color='green' onPress={() => console.log(text)} title='add todo' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});


