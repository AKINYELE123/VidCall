import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import bg from "../../../assets/images/iphone.jpg"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"

const IncomingCallScreen = () => {

    const onDecline = () => {
        console.warn("on Decline");
    };

    const onAccept = () => {
        console.warn("on Accept")
    };
    return (
        <View style={styles.root}>
            <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
                <Text style={styles.name}>Precious</Text>
                <Text style={styles.phoneNumber}>Video Call...</Text>

                <View style={[styles.row, {marginTop: "auto"}]}>
                    <View style={styles.iconContainer}>
                        <Ionicons name='alarm' color="white" size={30} />
                        <Text style={styles.iconText}>Remind me</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Entypo name='message' color="white" size={30} />
                        <Text style={styles.iconText}>Message</Text>
                    </View>
                </View>



                <View style={styles.row}>
                    {/* Decline Button */}
                    <Pressable onPress={onDecline} style={styles.iconContainer}>
                        <View style={styles.iconButtonContainer}>
                            <Feather name='x' color="white" size={40} />
                        </View>
                        <Text style={styles.iconText}>Decline</Text>
                    </Pressable>
                    {/* Acccept Button */}
                    <Pressable onPress={onAccept} style={styles.iconContainer}>
                        <View style={[styles.iconButtonContainer, {backgroundColor: "#2e7bff"}]}>
                            <Feather name='check' color="white" size={40} />
                        </View>
                        <Text style={styles.iconText}>Accept</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: "100%",
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginTop: 100,
        marginBottom: 10
    },
    phoneNumber: {
        fontSize: 20,
        color: "white"
    },
    bg: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        paddingBottom: 50
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    iconContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    iconText: {
        color: "white",
        marginBottom: 10
    },
    iconButtonContainer: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 50,
        margin: 10
    }
})
export default IncomingCallScreen