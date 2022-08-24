import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { Header } from "./components/Header";
import { InitialInfo } from "./components/InitialInfo";

import { styles } from "./styles";

const screens = [
  <InitialInfo />,
  <View>
    <Text>2</Text>
  </View>,
];

export function NewAged() {
  const [screenStep, setScreenStep] = useState(0);

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Header
          disabled={screenStep === 0}
          onBack={() => setScreenStep((current) => current - 1)}
        />
        {screens[screenStep]}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => setScreenStep((current) => current + 1)}
          >
            <Text style={styles.next}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
