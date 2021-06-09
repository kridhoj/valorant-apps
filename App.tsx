import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'

import Navigation from './navigation'
import { useColorScheme} from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation colorScheme={colorScheme}/>
    </SafeAreaProvider>
  );

}
