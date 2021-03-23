import * as React from 'react';
import { useState, useEffect } from 'react';

import { View, Text, TextInput, Button, FlatList, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Admin_Urun_Listel_Stack from "../screens/Admin_Urunler";
import Admin_Urun_Edit from "../screens/Admin_Urun_Edit";

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import { Icons } from "../Theme/icons";
import { MyHeader } from "../components/header";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Admin_Urun_Ekle(props) {


    const [Name, setName] = useState("");
    const [Stock, SetStock] = useState("");
    const [Price, SetPrice] = useState("");
    const [Desc, setDesc] = useState("");
    const [SubCate, setSubCate] = useState("");
    const [Created, setCreated] = useState("");
    const [title, setTitle] = useState("");


    const ekle = () => {
        var Tarih = new Date();
        setName("");
        SetStock("");
        SetPrice("");
        setDesc("");
        setSubCate("");
        setCreated("");
        fetch('http://192.168.56.1:3000/odata/Products', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: Name,
                Stock: parseInt(Stock),
                Price: parseInt(Price),
                Description: Desc,
                SubCategoryId: parseInt(SubCate),
                Created: Tarih,

            })
        });

        Alert.alert(
            "Ürün Eklendi",
            "Eklenen ürünü görmek için Git'e basınız",
            [
                {
                    text: "Git",
                    onPress: () => props.navigation.navigate("Admin_Urun_Listele"),
                    style: "cancel"
                },
                { text: "Urun Eklemeye Devam", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    }



    return (
        <View style={{ flex: 1, backgroundColor: "pink" }}>

            <MyHeader navigation={props.navigation} title={"Ürün Ekle"} />
            <View style={{
                flex: 1,
                backgroundColor: "white",
                flexDirection: "column",
            }}>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: "flex-end" }}><Text>Ürün Adı</Text></View>
                    <View style={{ flex: 2, }}><TextInput value={Name} onChangeText={(item) => setName(item)} style={{ borderWidth: 1, height: 40, width: 150, backgroundColor: "white", marginLeft: 10, flexDirection: "row", }} />
                    </View>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: "flex-end" }}><Text>Stok</Text></View>
                    <View style={{ flex: 2, }}><TextInput value={Stock.toString()} onChangeText={(item) => SetStock(item)} style={{ borderWidth: 1, height: 40, width: 150, backgroundColor: "white", marginLeft: 10, flexDirection: "row", }} />
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: "flex-end" }}><Text>Fiyat</Text></View>
                    <View style={{ flex: 2, }}><TextInput value={Price.toString()} onChangeText={(item) => SetPrice(item)} style={{ borderWidth: 1, height: 40, width: 150, backgroundColor: "white", marginLeft: 10, flexDirection: "row", }} />
                    </View>

                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: "flex-end" }}><Text>Açıklama</Text></View>
                    <View style={{ flex: 2, }}><TextInput value={Desc} onChangeText={(item) => setDesc(item)} style={{ borderWidth: 1, height: 40, width: 150, backgroundColor: "white", marginLeft: 10, flexDirection: "row", }} />
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: "flex-end" }}><Text>Kategori</Text></View>
                    <View style={{ flex: 2, }}><TextInput value={SubCate.toString()} onChangeText={(item) => setSubCate(item)} style={{ borderWidth: 1, height: 40, width: 150, backgroundColor: "white", marginLeft: 10, flexDirection: "row", }} />
                    </View>
                </View>


                <View style={{ justifyContent: "center", alignItems: "center", height: 30, marginTop: 50 }}>
                    <TouchableOpacity onPress={() => ekle()} style={{ backgroundColor: "purple", width: 150, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 7 }}><Text style={{ color: "white" }}>Ekle</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    );
}



function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Kapat"
                onPress={() => props.navigation.closeDrawer()}

            />

        </DrawerContentScrollView>
    );
}
function Admin_Urun_Ekle_Stack() {
    return (
        <Drawer.Navigator drawerContentOptions={{
            activeTintColor: '#008080',
            itemStyle: { marginVertical: 0 },
        }} drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen options={{ title: 'Ürün Ekle' }} name="Admin_Urun_Ekle" component={Admin_Urun_Ekle} />
            <Drawer.Screen options={{ title: 'Ürünler' }} name="Admin_Urun_Listel_Stack" component={Admin_Urun_Listel_Stack} />



        </Drawer.Navigator>
    );
}

export { Admin_Urun_Ekle_Stack };