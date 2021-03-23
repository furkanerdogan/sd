import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



import { SepetStack } from "../screens/Sepet";
import { LikeStack } from "../screens/Begeni";
import { HesabimStack } from "../screens/Hesabim";
import { HomeStack } from "../screens/Home";
import { KategoriStack } from "../screens/Kategori";



const Tab = createBottomTabNavigator();

const BotTabNav = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ keyboardHidesTabBar: true, activeTintColor: '#008080' }} >
      <Tab.Screen name="Home" component={HomeStack}
        options={{

          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Tab.Screen name="Kategoriler" component={KategoriStack}

        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="list" style={{ fontSize: size, color: color }} />
          )
        }}
      />
      <Tab.Screen name="Begenilerim" component={LikeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            <Icon name="heart" style={{ fontSize: size, color: color }} />
        }}
      />
      <Tab.Screen name="Sepet" component={SepetStack}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            <Icon name="basket" style={{ fontSize: size, color: color }} />
        }}
      />

      <Tab.Screen name="Hesabım" component={HesabimStack}
        options={{
          tabBarBadge: 1,
          tabBarIcon: ({ focused, color, size }) =>
            <Icon name="person" style={{ fontSize: size, color: color }} />
        }}
      />
    </Tab.Navigator>
  );
}
export default BotTabNav;