import * as React from "react"
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"

const window = Dimensions.get('window');
function urunDetayComp(item) {
    return (
        <View style={{
            flexDirection: 'column', backgroundColor: '#fff', margin: 2, alignContent: "stretch", flex: 0.5, borderRadius: 5, height: 300, flexShrink: 1
        }}>
            <View style={{ flexDirection: 'column', flexGrow: 1, flexShrink: 1, }}>
                <View style={{ flexDirection: 'column', flexGrow: 1, flexShrink: 1, alignItems: "stretch" }}>
                    <TouchableOpacity activeOpacity={1} style={{ alignItems: "center", }}
                        onPress={() => {
                            navigation.navigate('Screen3', {
                                id: item.id,
                            });
                        }}>
                        <TouchableOpacity style={{
                            flexGrow: 1, flexShrink: 1, alignSelf: "flex-end", height: 25, width: 25, backgroundColor: "white", justifyContent: "center", shadowColor: "#000", alignContent: "center", alignItems: "center", margin: 4, borderRadius: 50,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                        }}><Image source={Icons.favourite} style={{ height: 20, width: 20 }} /></TouchableOpacity>
                        <View style={{ flexGrow: 1, flexShrink: 1 }}>
                            <Image source={{ uri: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", }} style={{ height: 125, width: 125 }} />
                        </View >
                        <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'flex-start', marginLeft: 10, marginTop: 40 }}>
                            <Text>{item.id}</Text>
                            <View style={{ justifyContent: "center" }}>
                                <Text style={{
                                    justifyContent: "center", fontWeight: "bold"
                                }}>{item.releaseYear}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>



    );
}

const styles = StyleSheet.create({
    buton: {
        height: window.height * 0.07,
        width: window.width * 0.6,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20
    },
    btnyazi: {
        color: "white",
        fontSize: 20
    },

})
export { urunDetayComp };