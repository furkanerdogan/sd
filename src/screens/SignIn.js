import * as React from "react"
import { Component, useState, useEffect } from "react"
import { View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack'


import { Buton, TextInputt } from "../components/index"


const window = Dimensions.get('window');
function SignIn({ navigation }) {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.baslik}>LOGIN</Text>
                <TextInputt placeholder="Kullanıcı Adı..." style={styles.box1} ></TextInputt>

                <TextInputt placeholder="Şifre..." style={styles.box1} secureTextEntry={true} ></TextInputt>
                <Buton title="Giriş Yap" />
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp', { ad: "furkan" }); }}><Text>Hesabınız yok mu? hemen oluşturun</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SifreUnut')}><Text>Şifremi unuttum </Text></TouchableOpacity>
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    baslik: {
        fontSize: 30,
        alignItems: 'center',
        marginTop: window.height * 0.1,
        marginBottom: window.height * 0.1,
    },
    container: {
        flex: 1,
        alignItems: 'center',

    },
    deneme: {
        backgroundColor: "red",
    },
    box1: {
        marginTop: 20,


    },
})
export default SignIn;


