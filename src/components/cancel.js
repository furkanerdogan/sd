import * as React from "react"
import { View } from "react-native";
import { Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native"

import { Icons } from "../Theme/icons"
const window = Dimensions.get('window');

function Cancel({ ...props }) {
    return <TouchableOpacity {...props} style={styles.cancelacounttouch}><Image source={Icons.cancelacount} style={styles.cancelacount} /></TouchableOpacity>
}

const styles = StyleSheet.create({
    cancelacount: {
        height: 24,
        width: 24,

    },
    cancelacounttouch: {
        position: "absolute",
        right: 5,
        top: 5
    },

})
export { Cancel };