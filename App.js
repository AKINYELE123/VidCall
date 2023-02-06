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
    <>
      <StatusBar barStyle={'light-content'}/>
      <ContactScreen/>
    </>
  );
}; 




export default App;
