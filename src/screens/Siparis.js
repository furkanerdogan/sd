import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icons } from "../Theme/icons";


const stack = createStackNavigator();
const styles = StyleSheet.create({
    resim: {
        width: 40,
        height: 40
    }
})
function SiparisScreen({ navigation }) {

    return (

        <View>

        </View>
    )
}
const SiparisStack = () => {

    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="Siparislerim" component={SiparisScreen} />
        </stack.Navigator>
    )
}

export { SiparisStack }