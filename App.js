import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import contacts from "./assets/data/contacts.json"

import Navigation from "./src/navigation"


const App = () => {

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </>
  );
};




export default App;
