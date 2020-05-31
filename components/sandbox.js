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
        // Default is flexDirection 'column'
        flexDirection: 'row',
        // flex: determines how much of the available space is used.
        flex: .25,
        // justifyContent: determines how the items should be spread out on the main axis.
        // default is : 'flex-start'
        justifyContent: 'space-around',
        // alignItems: determines how the items should be spread out on the cross axis.
        // default is : 'flex-start'
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: 'blue',
    },

    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },

    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },

    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },

    boxFour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40,
    },
});