import * as React from "react"
import { useState } from "react"
import { View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack'
import { TextInputt, Buton, Cancel } from "../components/index"
// import Box from "../components/textInput"
// import Cancel from "../components/cancel"
// import Buton from "../components/buton"
const window = Dimensions.get('window');
function SignIn({ navigation }) {
    const [Mail, setMail] = useState("");
    const [MailError, setMailError] = useState("");
    const kontrol = () => {
        let reg = (/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (reg.test(Mail) == false || Mail == "") {
            setMailError("*Lütfen e-postanızı kontrol edin")

        }
        else
            setMailError("")
    }
    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.baslik}>Şifremi Unuttum</Text>
                <TextInputt placeholder="E posta Adresiniz" style={styles.box1} onChangeText={(text) => setMail(text)} keyboardType="email-address" ></TextInputt>
                <Text style={{ color: "red" }}>{MailError}</Text>
                <Cancel onPress={() => navigation.goBack()} />
                <Buton title="Onay Kodu İste" onPress={() => kontrol()} />
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

    box1: {
        marginTop: 20,


    },
})
export default SignIn;


