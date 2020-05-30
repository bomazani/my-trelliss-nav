import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Trelliss ToDo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 38,
        paddingLeft: 20,
        backgroundColor: 'coral',
    },

    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
    }
});