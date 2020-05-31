import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // Views in react-native have flexbox built-in
        flex: 1,
        paddingTop: 40,
        backgroundColor: 'blue',
    },

    boxOne: {

    },

    boxTwo: {

    },

    boxThree: {

    },

    boxFour: {

    },
});