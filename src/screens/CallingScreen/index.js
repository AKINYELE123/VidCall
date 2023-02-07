import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import CallActionBox from '../../components/CallActionBox.js';
import { useNavigation, useRoute } from '@react-navigation/native';

const CallingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const user =  route?.params?.user;
    const goBack = () => {
        navigation.pop();
    }
    return (
        <View style={styles.page}>
            <Pressable onPress={goBack} style={styles.backButton}>
            <Ionicons name='chevron-back' color="white" size={25}/>
            </Pressable>
            <View style={styles.cameraPreview}>
                <Text style={styles.name}>{user.user_display_name}</Text>
                <Text style={styles.phoneNumber}>ringing +234566577</Text>

                {/* <View style={{flex: 1}}></View> */}

            </View>
             <CallActionBox />
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
    backButton: {
        position: "absolute",
        top: 60,
        left: 10,
        zIndex: 10
    }
})

export default CallingScreen