import * as React from "react";
import { useEffect, useState } from 'react';

import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { Icons } from "../Theme/icons";
import { UrunlerScreen } from "./Urunler";




const Stack = createStackNavigator();
function AltKategoriScreen({ route, navigation }) {
    const window = Dimensions.get("window");

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {

        const { id } = route.params;
        console.log("id:::", id);
        var url = "http://192.168.56.1:3000/odata/SubCategories?$filter=CategoryId eq " + JSON.stringify(id);
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.value))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);



    const renderKategori = ({ item }) => {
        return (

            <View style={{ flex: 1, paddingLeft: 30, borderColor: "#F1E7D9", borderBottomWidth: 1.3 }}>


                <TouchableOpacity activeOpacity={1} style={{ height: 80, flexDirection: "row", alignItems: "center" }} onPress={() => { navigation.navigate('Urunler', { Id: item.Id }) }}>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{
                            justifyContent: "center", fontWeight: "bold"
                        }}>{item.Name}
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end", }}>
                        <Image style={{
                            height: 20, width: 20, right: window.width * 0.1
                        }}
                            source={Icons.right_arrow} />

                    </View>

                </TouchableOpacity>
            </View>

        );
    }
    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={data}
                renderItem={renderKategori}
                keyExtractor={item => item.Id.toString()}
            />
        </View>
    );
}


export { AltKategoriScreen };