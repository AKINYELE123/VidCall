import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"

const CallingScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.cameraPreview}>
                <Text style={styles.name}>Precious</Text>
                <Text style={styles.phoneNumber}>ringing +234566577</Text>

                {/* <View style={{flex: 1}}></View> */}

            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.iconButton}>
                    <Ionicons name='ios-camera-reverse' size={30} color={"white"} />
                </View>
                <View style={styles.iconButton}>
                    <MaterialIcons name='camera-off' size={30} color={"white"} />
                </View>
                <View style={styles.iconButton}>
                    <MaterialIcons name='microphone-off' size={30} color={"white"} />
                </View>
                <View style={[styles.iconButton, {backgroundColor: "red"}]}>
                    <MaterialIcons name='phone-hangup' size={30} color={"white"} />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        height: "100%",
        backgroundColor: "#7b4e80",
    },
    cameraPreview: {

        flex: 1,
        alignItems: "center",
        paddingTop: 10,
        paddingHorizontal: 10
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginTop: 50,
        marginBottom: 10
    },
    phoneNumber: {
        fontSize: 20,
        color: "white"
    },
    bottomContainer: {
        backgroundColor: "#333333",
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: "100%",
        marginTop: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 40
    },
    iconButton: {
        backgroundColor: "#4a4a4a",
        padding: 15,
        borderRadius: 50,
    }
})

export default CallingScreen