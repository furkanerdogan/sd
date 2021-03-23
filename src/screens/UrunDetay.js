import * as React from 'react';
import { useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import Sepeteekle from "../components/sepeteekle";
import { Icons } from "../Theme/icons";


function UrunDetayScreen({ route, navigation }) {
    const [image, setImage] = useState(["https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?nature",
    ]);

    const { item } = route.params;
    return (
        <View style={{ flex: 1 }}>

            <SliderBox
                images={image}
                resizeMode={'cover'}
                dotColor="green"
                height={320}
                inactiveDotColor="red"

                onCurrentImagePressed={() => { setvisible(true); }}
            />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", top: 0, margin: 3 }}><Image style={{ height: 20, width: 20 }} source={Icons.left_arrow} /></TouchableOpacity>
            <View style={{ backgroundColor: "#FFBD8B", padding: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
                <Text>Ürün adı: {item.Name}</Text>
                <Text>Ürün Açıklaması: {item.Description}</Text>
                <Text>Bedeni: XL</Text>
            </View>

            <Sepeteekle item={item} />
        </View>
    );
}

export { UrunDetayScreen };