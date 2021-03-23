import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Icons } from "../Theme/icons";

function MyHeader(props) {
    return (
        <View style={styles.header}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                    <Image
                        source={Icons.hamburger}
                        style={{ height: 25, width: 25 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.logout}>
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                    <Image
                        source={Icons.user}
                        style={{ height: 25, width: 25 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        height: 50,
        top: 0,
        flexDirection: "row",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    menu: {
        flex: 1,
        flexShrink: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        flex: 1,
        flexShrink: 1,
        flexGrow: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    logout: {
        flex: 1,
        flexShrink: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },

});

export { MyHeader };