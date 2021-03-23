import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icons } from "../Theme/icons";

import { CardContainer, CardSummary, CardTitle } from "../components/Card_Kompanent";

import { SiparisStack } from "./Siparis";
import { DegerlendirmelerimScreen } from "./Degerlendirmelerim";
import { IndirimKuponuScreen } from "./IndirimKuponu";
import { YardimScreen } from "./Yardim";



const Stack = createStackNavigator();
const DATA = [
  {
    id: '5',
    title: 'Hesabım',
    komponent: 'Hesabim',
  },
  {
    id: '2',
    title: 'Değerlendirmelerim',
    komponent: 'Degerlendirmelerim',
    resim: Icons.comment,
  },
  {
    id: '1',
    title: 'Siparislerim',
    komponent: 'Siparislerim',
    resim: Icons.siparis,
  },

  {
    id: '3',
    title: 'İndirim Kuponlarım',
    komponent: 'IndirimKuponu',
    resim: Icons.salesKupon,
  },


  {
    id: '6',
    title: 'Deneme',
  },

  {
    id: '7',
    title: 'Deneme',
  },

  {
    id: '8',
    title: 'Deneme',
  },
  {
    id: '4',
    title: 'Yardım',
    komponent: 'Yardim',
    resim: Icons.yardım,
  },
  {
    id: '9',
    title: 'Deneme',
  },
  {
    id: '10',
    title: 'Deneme',
  },
  {
    id: '511',
    title: 'Deneme',
  },
];
function HesabimScreen({ navigation }) {

  const renderCard = ({ item }) => {

    return (
      <View style={{ height: 60, margin: 1, justifyContent: "center", paddingLeft: 7 }}>
        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { navigation.navigate(item.komponent) }}>
          <Image style={{ height: 25, width: 25, marginRight: 20 }} source={item.resim} /><Text>{item.title}</Text></TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{}}

        data={DATA}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const HesabimStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hesabim" component={HesabimScreen} />
      <Stack.Screen name="Siparislerim" component={SiparisStack} />
      <Stack.Screen name="Degerlendirmelerim" component={DegerlendirmelerimScreen} />
      <Stack.Screen name="IndirimKuponu" component={IndirimKuponuScreen} />
      <Stack.Screen name="Yardim" component={YardimScreen} />
    </Stack.Navigator>
  );
}

export { HesabimStack };