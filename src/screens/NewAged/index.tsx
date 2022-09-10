import { StatusBar } from "expo-status-bar";
import React, { useMemo, useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { useNewAged } from "../../contexts/NewAgedProvider";
import { Address } from "./components/Address";
import { Contact } from "./components/Contact";
import { Gender } from "./components/Gender";
import { Header } from "./components/Header";
import { InitialInfo } from "./components/InitialInfo";

import { styles } from "./styles";

const screens = [<InitialInfo />, <Gender />, <Address />, <Contact />];

export function NewAged() {
  const { newAged } = useNewAged();
  const [screenStep, setScreenStep] = useState(0);

  const isLastScreen = useMemo(
    () => screenStep === screens.length - 1,
    [screenStep]
  );

  const handleNextStep = () => {
    if (isLastScreen) {
      console.log(newAged);
    } else {
      setScreenStep((current) => current + 1);
    }
  };

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
            onPress={handleNextStep}
          >
            <Text style={styles.next}>
              {isLastScreen ? "Cadastrar" : "Próximo"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
