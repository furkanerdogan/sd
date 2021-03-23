import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SepetComp from "../components/sepetComp";
import Odemekart from "../components/odemekart";
const Stack = createStackNavigator();

function SepetScreen({ navigation }) {
  return (
    <View style={{ flex: 1, }}>

      <SepetComp />
      <Odemekart />

    </View>
  );
}
const SepetStack = () => {
  return (
    <Stack.Navigator    >
      <Stack.Screen name="Sepetim" component={SepetScreen} />

    </Stack.Navigator>
  );
}

export { SepetStack };