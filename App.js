import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import contacts from "./assets/data/contacts.json"

import ContactScreen from './src/screens/ContactScreen';
import CallingScreen from './src/screens/CallingScreen';


const App = () => {
  
  return (
    <SafeAreaView >
      <StatusBar barStyle={'light-content'}/>
      <CallingScreen/>
    </SafeAreaView>
  );
}; 




export default App;
