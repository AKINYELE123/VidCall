import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"


const CallActionBox = () => {
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);

    const onReverseCamera =() => {
        console.log("came");
    }
    const onToggleCamera =() => {
        setIsCameraOn(currentValue => !currentValue);
    }
    const onToggleMicrophone =() => {
        setIsMicOn(currentValue => !currentValue);
    }
    const onHangup =() => {
        console.log("came");
    }
    return (
        <View style={styles.bottomContainer}>
            <Pressable onPress={onReverseCamera} style={styles.iconButton}>
                <Ionicons name='ios-camera-reverse' size={30} color={"white"} />
            </Pressable>
            <Pressable onPress={onToggleCamera} style={styles.iconButton}>
                <MaterialIcons name={isCameraOn? 'camera-off' : "camera"} size={30} color={"white"} />
            </Pressable>
            <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
                <MaterialIcons name={isMicOn? 'microphone-off': "microphone"} size={30} color={"white"} />
            </Pressable>
            <Pressable onPress={onHangup} style={[styles.iconButton, { backgroundColor: "red" }]}>
                <MaterialIcons name='phone-hangup' size={30} color={"white"} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default CallActionBox