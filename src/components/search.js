import * as React from 'react';
import { Keyboard } from 'react-native';

import { View, TextInput, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';

import { Icons } from "../Theme/icons"

function Search({ ...Children }) {
    const [isFocus, setFocus] = React.useState(false)
    const [value, setValue] = React.useState("")

    const OnCancel = () => {
        Keyboard.dismiss();
        setFocus(false);
        setValue('');
    }
    const onClear = () => {
        setValue('');
    }

    return (

        <View style={styles.panel} >
            <TextInput {...Children} placeholder="Herhangi bir arama yapınız..." placeholderTextColor="black" value={value} style={styles.searchInput}
                onChangeText={text => setValue(text)} onFocus={() => setFocus(true)}
            />
            <View style={{ position: "absolute" }} right={15}>
                {isFocus == true && value.length > 0 ?
                    <TouchableOpacity style={styles.ImageTouchCancel} onPress={onClear}>
                        <Image source={Icons.cancel} style={styles.CancelImages} />
                    </TouchableOpacity> : null
                }
            </View>
            {isFocus == false ?
                <TouchableOpacity style={styles.ImageViewSearch} onPress={() => setFocus(true)}>
                    <Image source={Icons.search} style={styles.Images} />
                </TouchableOpacity> : null}
            {isFocus == true ? <TouchableOpacity style={styles.ImageViewSearch} onPress={OnCancel}>
                <Image source={Icons.left_arrow} style={styles.Images} />
            </TouchableOpacity> : null}



        </View >
    )
}

export { Search };

const styles = StyleSheet.create({

    panel: {

        paddingBottom: 8,
        paddingTop: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,


    },
    searchInput: {
        backgroundColor: "white",
        paddingLeft: 50,
        marginRight: 10,
        marginLeft: 10,
        paddingRight: 50,
        flex: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 25,

        elevation: 11,
    },
    ImageViewSearch: {
        position: "absolute",
        paddingLeft: 25,
        elevation: 12,

    },
    ImageTouchCancel: {

        paddingRight: 10,
        elevation: 12,
    },
    Images: {
        height: 20,
        width: 20
    },
    CancelImages: {
        height: 13,
        width: 13
    }



})