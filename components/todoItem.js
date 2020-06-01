import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <View style={styles.itemIcon}>
                    <MaterialIcons name='delete' size={18} color='#333' />
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },

    itemText: {
        paddingTop: 4,
        flex: 1,
        // backgroundColor: 'orange',

    },

    itemIcon: {
        flex: 0,
        backgroundColor: 'orange',
        borderRadius: 15,
        padding: 6,
    },

});