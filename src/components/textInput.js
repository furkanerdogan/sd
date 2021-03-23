import React from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';


const window = Dimensions.get('window');

function TextInputt({ style, ...Children }) {

    return (
        //parametrelerden place holder için yazır alıyorum,style için css alıyorum ve 
        //son olarak input içindeki diğer özelliklere ulaşabilmek için ...children tanımlıyorum(Bu şekilde doğru kullanım elde)
        <TextInput {...Children} style={[style, styles.textInputbox]} ></TextInput >
    )
}
export { TextInputt };


const styles = StyleSheet.create({

    textInputbox: {

        width: window.width * 0.9,
        backgroundColor: "white",
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 25,
        elevation: 11,

    }


})

