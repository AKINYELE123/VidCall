import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CallActionBox from '../../components/CallActionBox.js';

const CallScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}/>


      <CallActionBox />
    </View>
  )
};

const styles = StyleSheet.create({
    cameraPreview: {
        // flex: 1,
        // alignItems: "center",
        // paddingTop: 10,
        // paddingHorizontal: 10,
        backgroundColor: "#ffff6e",
        width: 150,
        height: 200,
        borderRadius: 10,
        position: "absolute",
        right: 10,
        top: 40
    },
    page: {
        flex: 1,
        backgroundColor: "#7b4e80"
    }
})

export default CallScreen