import React from 'react';
import type {PropsWithChildren} from 'react';
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

function App(): JSX.Element {
  

  return (
    <OnBoarding />
  );
}

export default App;