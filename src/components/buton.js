import * as React from "react"
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"

const window = Dimensions.get('window');
function Buton({ title, styletext, styletouch, ...Children }) {
    return (<TouchableOpacity {...Children} style={[styletouch, styles.buton]}><Text style={[styletext, styles.btnyazi]}>{title}</Text></TouchableOpacity>);
}

const styles = StyleSheet.create({
    buton: {
        height: window.height * 0.07,
        width: window.width * 0.6,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20
    },
    btnyazi: {
        color: "white",
        fontSize: 20
    },

})
export { Buton };