import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const Odemekart = (props) => {
    let totalPrice = props.sepet.reduce((total, item) => (total += JSON.parse(item.Price) * JSON.parse(item.count)), 0);

    return (

        <View style={{ bottom: 0, height: 70, backgroundColor: "#DCDCDC", width: '100%' }}>
            <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignItems: 'center', paddingLeft: 20, justifyContent: "space-between" }}>
                <Text>Toplam sepet tutarı:{totalPrice}₺</Text>
                <TouchableOpacity style={{ backgroundColor: 'orange', width: 100, height: 30, borderRadius: 5, marginRight: 15, justifyContent: "center" }} onPress={() => console.log('test')}>
                    <Text style={{ color: '#F5F5F5', textAlign: "center" }}>Ödeme</Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}
const mapstateToProps = (state) => {
    return {
        sepet: state.ReducerSepet.sepet,
    }
}
export default connect(mapstateToProps)(Odemekart)