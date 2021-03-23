import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { createStackNavigator } from '@react-navigation/stack';

import LikeComp from "../components/likeComp";
const Stack = createStackNavigator();

function LikeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>

      <MenuProvider >
        <LikeComp />
      </MenuProvider>
    </View>
  );
}
const LikeStack = () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen name="Beğenilerim" component={LikeScreen} />

    </Stack.Navigator>
  );
}

export { LikeStack };