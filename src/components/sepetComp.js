import * as React from 'react';
import { useEffect } from 'react';
import { Component, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator, DatePickerIOSComponent } from "react-native";
import { connect } from "react-redux";
import { Icons } from "../Theme/icons";
import { useNavigation } from '@react-navigation/native';

import { addsepet, removeOne, removeAll } from "../store/actions/sepetAction";

function SepetComp(props) {//sepetin içinde gözüken kısım
    const navigation = useNavigation();

    const renderSepet = ({ item }) => {
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
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => props.removeOne(props.sepet, item)} style={{ borderWidth: 1, borderColor: 'grey' }}>
                                <Image source={Icons.remove} style={{ height: 16, width: 16, margin: 2 }} />
                            </TouchableOpacity>
                            <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'grey', paddingHorizontal: 7, paddingTop: 3, color: 'grey', fontSize: 13 }}>{item.count}</Text>
                            <TouchableOpacity onPress={() => props.addsepet(props.sepet, item)} style={{ borderWidth: 1, borderColor: 'grey' }}>
                                <Image source={Icons.plus} style={{ height: 16, width: 16, margin: 2 }} />
                            </TouchableOpacity>
                        </View>
                    </View>{/*icerik*/}
                </View>
                <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.removeAll(item)} style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>

                        <Image source={Icons.trash} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: "grey", justifyContent: "center", alignContent: "center" }}>

            <FlatList
                data={props.sepet}
                renderItem={renderSepet}
                keyExtractor={(item, index) => index.toString()} />


        </View>
    );
}

const mapstateToProps = (state) => {
    return {
        sepet: state.ReducerSepet.sepet,
        isloading: state.ReducerUrun.isloading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addsepet,
        removeOne,
        removeAll,

    };
};
export default connect(mapstateToProps, mapDispatchToProps())(SepetComp);

