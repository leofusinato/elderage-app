import React from 'react';
import { View } from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AuthRoutes from './src/routes/auth.routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold,
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