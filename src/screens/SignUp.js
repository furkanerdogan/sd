import * as React from "react";
import { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback, Dimensions, TouchableOpacity, Image, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import { Buton, TextInputt, Cancel } from "../components/index";

// yukarıdaki satır ile alttaki 3 satır aynı görevi görüyor ancak karışıklığı azalmak için bu şekilde bir tanımlama yaptık
// import Box from "../components/textInput"
// import Buton from "../components/buton"
// import Cancel from "../components/cancel";


const window = Dimensions.get('window');

function SignUp({ navigation }) {

    const [Sifre, setSifre] = useState("");
    const [Mail, setMail] = useState("");
    const [MailError, setMailError] = useState("");
    const [SifreError, setSifreError] = useState("");
    const [Bool, setBool] = useState(false);

    const kontrol = () => {
        if (Bool == false) {
            let reg = (/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (Sifre == "" && Mail == "" || Mail == "") {
                setMailError("*Lütfen geçerli bir e-posta girin");
                setBool(false);
            }
            else if (Mail != "" && reg.test(Mail) === false) {
                setBool(false);
            }
            else if (Mail != "" && Sifre == "") {
                setMailError("");
                setSifreError("*Şifre boş olmaz ");
                setBool(false);
            }
            else if (Mail != "" && Sifre.length <= 6) {
                setMailError("");
                setSifreError("*Şifre 6dan küçük  olmaz ");
                setBool(false);
            }
            else
                setBool(true);
        }
        else {
            Alert.alert(
                "Üyelik talebiniz alındı.",
                "",
                [
                    { text: "Tamam", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
    }
    return (
        < TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ flex: 1 }}>
                <Cancel onPress={() => { navigation.goBack() }} />
                <View style={styles.container}>
                    <View style={{ flex: 8, backgroundColor: "red", position: "absolute" }}></View>
                    <Text style={styles.baslik}>Kayıt Ol</Text>
                    <TextInputt placeholder="Mail" style={styles.box1} onChangeText={(text) => setMail(text)} keyboardType="email-address"></TextInputt>
                    <Text>{MailError}</Text>
                    <TextInputt placeholder="Şifre" style={styles.box1} onChangeText={(text) => setSifre(text)} secureTextEntry={true}></TextInputt>
                    <Text>{SifreError}</Text>
                    <Buton title="Kayıt Ol!" onPress={() => { kontrol() }} />
                </View>
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

        alignItems: 'center',

    },
    deneme: {
        backgroundColor: "red",
    },
    box1: {
        marginTop: 10,
        fontFamily: "Arial",

    },
    hata: {
        borderWidth: 1,
        borderColor: "red",
        marginTop: 10,
        fontFamily: "Arial",


    }
});

export default SignUp;


