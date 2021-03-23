import React, { useEffect, useState, Children } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


export function CardContainer({ props, Children }) {

    return (
        <TouchableOpacity {...Children}  ><View style={styles.CardContainer}>
            {props}
        </View></TouchableOpacity>)
}

export function CardTitle({ props }) {
    return (
        <Text>{props}</Text>
    )
}


export function CardSummary({ props }) {
    return (
        <Text>{props}</Text>
    )

}

const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: "red",
        height: 50,


        flex: 1,
    },
})