import * as React from 'react';
import { useEffect } from 'react';
import { Component, useState } from 'react';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { View, Text, Button, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator, DatePickerIOSComponent } from "react-native";
import { connect } from "react-redux";
import { Icons } from "../Theme/icons";
import { useNavigation } from '@react-navigation/native';

import { removefavori } from "../store/actions/favorilerAction";
import { addsepet } from "../store/actions/sepetAction";


function LikeComp(props) {
    console.log("favorilerrrrr:::", props.favoriler);
    const navigation = useNavigation();

    const renderFav = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120, margin: 5, borderRadius: 10 }}>{/*beyaz kutu*/}
                <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                    <View style={{ paddingRight: 10 }}>
                        <Image source={{ uri: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", }} style={{ height: 60, width: 60, marginLeft: 10 }} />
                    </View>{/*resim*/}
                    <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                        <Text numberOfLines={1} style={{ fontSize: 15 }}>{item.Name}</Text>
                        <Text numberOfLines={1} style={{ fontSize: 15 }}>{item.Description}</Text>
                        <Text numberOfLines={1} style={{ color: '#333333', marginBottom: 10 }}>{item.Price}₺</Text>
                        <TouchableOpacity onPress={() => props.addsepet(props.sepet, item)} activeOpacity={0.8} style={{ flexDirection: 'row' }}>
                            <Text style={{ borderColor: "orange", padding: 4, borderRadius: 10, borderWidth: 2 }}>Sepete Ekle</Text>
                        </TouchableOpacity>
                    </View>{/*icerik*/}
                </View>
                <View >
                    <Menu style={{ flex: 2 }}>
                        <MenuTrigger style={{ marginTop: 32, marginRight: 10 }}>
                            <Image source={Icons.triggermenu} style={{ height: 20, width: 20, marginTop: 0 }} />
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption onSelect={() => props.removefavori(item)} text='Ürünü sil' />
                        </MenuOptions>
                    </Menu>
                </View>
            </View >
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: "grey", justifyContent: "center", alignContent: "center" }}>
            <Text>likeee</Text>
            <FlatList
                data={props.favoriler}
                renderItem={renderFav}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    );
}

const mapstateToProps = (state) => {
    return {
        sepet: state.ReducerSepet.sepet,

        favoriler: state.ReducerFavoriler.favoriler
    };
};

export default connect(mapstateToProps, { removefavori, addsepet })(LikeComp);

