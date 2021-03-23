
import * as React from 'react';
import { useState, useEffect } from 'react';

import { View, Text, TextInput, Button, FlatList, Alert, Image, TouchableHighlight, TouchableOpacity } from 'react-native';


import { Icons } from "../Theme/icons";
import { MyHeader } from "../components/header";

function Admin_Urun_Edit(props) {
    const [Name, setName] = useState("");
    const [Stock, SetStock] = useState("");
    const [Price, SetPrice] = useState("");
    const [Desc, setDesc] = useState("");
    const [SubCate, setSubCate] = useState("");
    const [Created, setCreated] = useState("");
    const { item } = props.route.params;

    useEffect(() => {

        setName(item.Name);
        SetStock(item.Stock);
        SetPrice(item.Price);
        setDesc(item.Description);
        setSubCate(item.SubCategoryId);
        setCreated(item.Created);


    }, []);
    const guncelle = () => {
        let url = "http://192.168.56.1:3000/odata/Products/" + JSON.stringify(item.SubCategoryId);
        fetch(url, {
            method: 'PUT',
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


            })
        });
        Alert.alert(
            "Ürün Başarıyla Güncellendi",
            "Eklenen ürünü görmek için Git'e basınız",
            [
                {
                    text: "Git",
                    onPress: () => props.navigation.navigate("Admin_Urun_Listele"),
                    style: "cancel"
                }

            ],
            { cancelable: false }
        );

    }


    return (
        <View style={{ flex: 1, backgroundColor: "pink" }}>

            <MyHeader navigation={props.navigation} title={"Düzenle"} />

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
                    <View style={{ flex: 2, }}><TextInput value={Desc.toString()} onChangeText={(item) => setDesc(item)} style={{ borderWidth: 1, height: 40, width: 150, backgroundColor: "white", marginLeft: 10, flexDirection: "row", }} />
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: "flex-end" }}><Text>Kategori</Text></View>
                    <View style={{ flex: 2, }}><TextInput value={SubCate.toString()} onChangeText={(item) => setSubCate(item)} style={{ borderWidth: 1, height: 40, width: 150, backgroundColor: "white", marginLeft: 10, flexDirection: "row", }} />
                    </View>
                </View>


                <View style={{ justifyContent: "center", alignItems: "center", height: 30, marginTop: 50 }}>
                    <TouchableOpacity onPress={() => guncelle()} style={{ backgroundColor: "purple", width: 150, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 7 }}><Text style={{ color: "white" }}>Kaydet</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
export default Admin_Urun_Edit;