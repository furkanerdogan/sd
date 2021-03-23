import * as React from 'react';
import { useEffect } from 'react';


import { Component, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator, ImagePropTypes } from "react-native";
import { connect } from "react-redux";

import { useNavigation } from '@react-navigation/native';

import { Icons } from "../Theme/icons"

import { addsepet } from "../store/actions/sepetAction";
import { Urunlistele, sortProducts } from "../store/actions/urunAction";
import { addfavori } from "../store/actions/favorilerAction";

function UrunlerComp(props) {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const Id = props.Id;

    useEffect(() => {
        props.Urunlistele(Id);
    }, []);
    console.log("en son gelen ıd", Id);

    const RenderUrun = ({ item }) => {

        return (
            <View style={{
                flexDirection: 'column', backgroundColor: '#fff', margin: 2, alignContent: "stretch", flex: 0.5, borderRadius: 5, height: 300, flexShrink: 1
            }}>
                <View style={{ flexDirection: 'column', flexGrow: 1, flexShrink: 1, }}>
                    <View style={{ flexDirection: 'column', flexGrow: 1, flexShrink: 1, alignItems: "stretch" }}>
                        <TouchableOpacity activeOpacity={1} style={{ alignItems: "center", }}
                            onPress={() => {
                                navigation.navigate('UrunDetayScreen', { item: item });
                            }}>
                            <TouchableOpacity onPress={() => props.addfavori(props.favoriler, item)} style={{
                                flexGrow: 1, flexShrink: 1, alignSelf: "flex-end", height: 25, width: 25, backgroundColor: "white", justifyContent: "center", shadowColor: "#000", alignContent: "center", alignItems: "center", margin: 4, borderRadius: 50,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,

                                elevation: 3,
                            }}><Image source={Icons.favourite} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                            <View style={{ flexGrow: 1, flexShrink: 1 }}>
                                <Image source={{ uri: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", }} style={{ height: 125, width: 125 }} />
                            </View >
                            <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'flex-start', marginLeft: 10, marginTop: 40 }}>
                                <Text>{item.Name}</Text>

                                <Text numberOfLines={1} style={{
                                    justifyContent: "center", fontWeight: "bold"
                                }}>{item.Description}
                                </Text>
                                <Text>{item.Price}₺</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.addsepet(props.sepet, item)} style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'flex-end', marginRight: 10 }}>
                                <Text style={{ borderColor: "orange", padding: 4, borderRadius: 10, borderWidth: 2 }}>Sepete Ekle</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                horizontal={false}
                numColumns="2"
                data={props.filteredProducts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={RenderUrun}


            />

        </View>
    );
}

const mapstateToProps = (state) => {
    return {
        urunlist: state.ReducerUrun.urunlist,
        filteredProducts: state.ReducerUrun.filteredItems,
        sepet: state.ReducerSepet.sepet,
        isloading: state.ReducerUrun.isloading,
        sort: state.ReducerUrun.sort,
        favoriler: state.ReducerFavoriler.favoriler



    };
};
// const getir = () => ({type: 'URUNAL' })
// const mapActionToProps = () => ({addsepet})
// const mapDispatchToProps = (dispatch) => {
//     return {
//         //eklemeyapma: (item) => dispatch(addsepet(item)),
//         // getir: () => dispatch(Urunlistele()),
//         Urunlistele,
//         addsepet,
//         sortProducts,
//     };
// };
export default connect(mapstateToProps, { Urunlistele, addsepet, sortProducts, addfavori })(UrunlerComp);

