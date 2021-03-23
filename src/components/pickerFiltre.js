import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Picker } from '@react-native-picker/picker';
import { sortProducts } from "../store/actions/urunAction";



function PickerFiltre(props) {
    return (

        <Picker
            value="a"
            selectedValue={{}}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => {
                props.sortProducts(
                    props.filteredProducts,
                    itemValue

                );
            }

            }>
            <Picker.Item label="Sırala" value="" />
            <Picker.Item label="önce en ucuz" value="ucuz" />
            <Picker.Item label="önce en pahalı" value="pahalı" />

        </Picker>


    )
}

const mapstateToProps = (state) => {
    return {
        sort: state.ReducerUrun.sort,
        filteredProducts: state.ReducerUrun.filteredItems,

    }
}

export default connect(mapstateToProps, { sortProducts })(PickerFiltre);