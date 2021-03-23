
import * as React from 'react';
import { useState, useEffect } from 'react';

import { View, Text, TextInput, Button, FlatList, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"

import { Icons } from "../Theme/icons";
import { MyHeader } from "../components/header";
import { StackRouter } from 'react-navigation';

import Admin_Urun_Edit from "./Admin_Urun_Edit";
import { State } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function Admin_Urun_Listele(props) {
    const [data, setData] = useState([]);
    const [hata, setHata] = useState([]);




    useEffect(async () => {
        await fetch('http://192.168.56.1:3000/odata/Products')
            .then(res => res.json())
            .then(res => { setData(res.value) })
            .catch(error => { setHata(error.data) })

    }, [])
    console.log("data2:", data);
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <MyHeader navigation={props.navigation} title={"Ürünler"} />
            <FlatList
                data={data}
                extraData={data}

                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: "white",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.32,
                        shadowRadius: 5.46,
                        flexDirection: "row-reverse",
                        elevation: 9,

                    }}>


                        <View style={{ flex: 1, alignItems: "center" }}>

                            <TouchableOpacity onPress={() => { props.navigation.navigate('Admin_Urun_Edit', { item: item }) }} style={{ height: 20, width: 20 }}><Image source={Icons.edit} style={{ height: 20, width: 20, tintColor: "#008080" }} /></TouchableOpacity>

                        </View>
                        <View style={{ flex: 9, }}>

                            <Text>Ürün Adı:{item.Name}</Text>
                            <Text>Ürün Stock:{item.Stock}</Text>
                            <Text>Ürün Price:{item.Price}</Text>
                            <Text>Ürün Description:{item.Description}</Text>
                            <Text>Ürün Altkategorisi:{item.SubCategoryId}</Text>
                            <Text>Ürün Eklenme Tarihi:{item.Created}</Text>
                        </View>

                    </View>


                }
            />




        </View>
    );
}

const Admin_Urun_Listel_Stack = () => {
    return (

        <Stack.Navigator headerMode={false} >
            <Stack.Screen name="Admin_Urun_Listele" component={Admin_Urun_Listele} />
            <Stack.Screen name="Admin_Urun_Edit" component={Admin_Urun_Edit} />

        </Stack.Navigator>

    );
}
export default Admin_Urun_Listel_Stack;