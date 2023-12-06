// import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import OnBoarding from './screens/OnBoarding';
import Survey from './screens/Survey';

function App(): JSX.Element {
  

  return (
    // <OnBoarding />
    <Survey />
  );
}

export default App;