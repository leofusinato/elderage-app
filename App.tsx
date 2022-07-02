import React from 'react';
import { View } from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AuthRoutes from './src/routes/auth.routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  );
}