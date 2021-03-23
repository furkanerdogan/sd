import * as React from 'react';
import { useEffect, useState } from 'react';


import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icons } from "../Theme/icons"
import { Search } from "../components/index"

import { AltKategoriScreen } from "./AltKategori";
import { UrunlerScreen } from "./Urunler";


const window = Dimensions.get("window");
const Stack = createStackNavigator();



function KategoriScreen({ route, navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.56.1:3000/odata/Categories')
      .then((response) => response.json())
      .then((json) => setData(json.value))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  console.log("of yeni", data);

  const renderKategori = ({ item }) => {
    return (

      <View style={{ flex: 1, paddingLeft: 30, borderColor: "#F1E7D9", borderBottomWidth: 1.3 }}>


        <TouchableOpacity activeOpacity={1} style={{ height: 125, flexDirection: "row", alignItems: "center" }} onPress={() => { navigation.navigate('AltKategori', { id: item.Id }) }}>
          {/* <Image style={{ resizeMode: "contain", height: 75, width: 75, marginRight: 20, }}
            source={item.resim} /> */}
          {/* <Image source={{ uri: 'data:image/png;base64,' + item.Image }} style={{ resizeMode: "contain", height: 75, width: 75, marginRight: 20, }} /> */}
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
      <Search />
      <FlatList
        data={data}
        renderItem={renderKategori}
        keyExtractor={item => item.Id.toString()}
      />
    </View>
  );
}
const KategoriStack = () => {
  return (
    <Stack.Navigator initialRouteName="Kategoriler" screenOptions={{
      headerShown: false
    }} mode="modal" >
      <Stack.Screen name="Kategoriler" component={KategoriScreen} />
      <Stack.Screen name="AltKategori" component={AltKategoriScreen} />
      <Stack.Screen name="Urunler" component={UrunlerScreen} />

    </Stack.Navigator>
  );
}

export { KategoriStack };