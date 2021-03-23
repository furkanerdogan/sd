import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addsepet } from "../store/actions/sepetAction";

const Sepeteekle = (props) => {
    const item = props.item;
    console.log("item", item.Price);
    return (

        <View style={{ bottom: 0, height: 70, backgroundColor: "#DCDCDC", width: '100%', position: "absolute" }}>
            <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignItems: 'center', paddingLeft: 20, justifyContent: "space-between" }}>
                <Text>Ürün Fiyatı{item.Price}₺</Text>
                <TouchableOpacity style={{ backgroundColor: 'orange', width: 100, height: 30, borderRadius: 5, marginRight: 15, justifyContent: "center" }} onPress={() => props.addsepet(props.sepet, item)}>
                    <Text style={{ color: '#F5F5F5', textAlign: "center" }}>Sepet Ekle</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

const mapstateToProps = (state) => {
    return {
        sepet: state.ReducerSepet.sepet,
    };
};
export default connect(mapstateToProps, { addsepet })(Sepeteekle);
