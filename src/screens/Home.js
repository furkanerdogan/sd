import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableWithoutFeedback, Keyboard, Dimensions, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import { Search, TextInputt } from "../components/index"
import { CardTitle, CardContainer, CardSummary } from "../components/Card_Kompanent";
import { Images } from "../Theme/images";


const Stack = createStackNavigator();
const window = Dimensions.get("window");
function HomeScreen({ navigation }) {
  const [items, setItems] = useState({ items: [] });

  useEffect(() => {
    fetch('http://192.168.56.1:3000/api/Uye/')

      .then(res => res.json())
      .then(json => { setItems(json) })
  });
  return (
    <TouchableWithoutFeedback >
      <View style={{ flex: 1 }}>
        <Search />
        <ScrollView>



          <TouchableHighlight onPress={() => { navigation.navigate('UrunListeleScreen') }} style={{ flexDirection: "column", backgroundColor: "green", marginBottom: 5 }}>
            <Image style={{ width: window.width * 1, height: window.height * 1 / 4, resizeMode: "stretch" }}
              source={require('../../assets/images/card.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { navigation.navigate('UrunListeleScreen') }} style={{ flexDirection: "column", backgroundColor: "green", marginBottom: 5 }}>
            <Image style={{ width: window.width * 1, height: window.height * 1 / 4, resizeMode: "stretch" }}
              source={require('../../assets/images/card1.jpg')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { navigation.navigate('UrunListeleScreen') }} style={{ flexDirection: "column", backgroundColor: "green", marginBottom: 5 }}>
            <Image style={{ width: window.width * 1, height: window.height * 1 / 4, resizeMode: "stretch" }}
              source={require('../../assets/images/card2.jpg')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { navigation.navigate('UrunListeleScreen') }} style={{ flexDirection: "column", backgroundColor: "green", marginBottom: 5 }}>
            <Image style={{ width: window.width * 1, height: window.height * 1 / 4, resizeMode: "stretch" }}
              source={require('../../assets/images/card3.jpg')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { navigation.navigate('UrunListeleScreen') }} style={{ flexDirection: "column", backgroundColor: "green", marginBottom: 5 }}>
            <Image style={{ width: window.width * 1, height: window.height * 1 / 4, resizeMode: "stretch" }}
              source={require('../../assets/images/card.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { navigation.navigate('UrunListeleScreen') }} style={{ flexDirection: "column", backgroundColor: "green", marginBottom: 5 }}>
            <Image style={{ width: window.width * 1, height: window.height * 1 / 4, resizeMode: "stretch" }}
              source={require('../../assets/images/card1.jpg')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { navigation.navigate('UrunListeleScreen') }} style={{ flexDirection: "column", backgroundColor: "green", marginBottom: 5 }}>
            <Image style={{ width: window.width * 1, height: window.height * 1 / 4, resizeMode: "stretch" }}
              source={require('../../assets/images/card2.jpg')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { navigation.navigate('UrunListeleScreen') }} style={{ flexDirection: "column", backgroundColor: "green", marginBottom: 5 }}>
            <Image style={{ width: window.width * 1, height: window.height * 1 / 4, resizeMode: "stretch" }}
              source={require('../../assets/images/card3.jpg')} />
          </TouchableHighlight>
        </ScrollView>

        <FlatList
          data={items}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.ad}</Text>
          )}
        />

      </View>
    </TouchableWithoutFeedback >
  );
}
const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export { HomeStack };