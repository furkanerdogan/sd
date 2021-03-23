import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import UrunlerComp from "../components/urunlerComp";
import PickerFiltre from "../components/pickerFiltre";
import { Search } from "../components/index";

const Stack = createStackNavigator();

function UrunlerScreen(props) {
    const { Id } = props.route.params;
    return (
        <View style={{ flex: 1 }}>
            <Search />
            <View style={{

                shadowColor: "red",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 2

            }}><PickerFiltre /></View>

            <UrunlerComp Id={Id} />


        </View>
    );
}



export { UrunlerScreen };