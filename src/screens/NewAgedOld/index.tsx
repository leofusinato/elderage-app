import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useMemo, useState } from "react";

import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useNewAged } from "../../contexts/NewAgedProvider";
import { AppStackParamList } from "../../global/route.types";
import { api } from "../../services/api";
import { Address } from "./components/Address";
import { Contact } from "./components/Contact";
import { Gender } from "./components/Gender";
import { Header } from "./components/Header";
import { InitialInfo } from "./components/InitialInfo";

import { styles } from "./styles";

const screens = [<InitialInfo />, <Gender />, <Address />, <Contact />];

export function NewAged() {
  const { newAged, setNewAged } = useNewAged();
  const [screenStep, setScreenStep] = useState(0);

  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList, "AddAged">>();

  const isLastScreen = useMemo(
    () => screenStep === screens.length - 1,
    [screenStep]
  );

  const handleNextStep = async () => {
    if (isLastScreen) {
      await addAged();
    } else {
      setScreenStep((current) => current + 1);
    }
  };

  const handlePreviosuStep = () => {
    if (screenStep === 0) {
      navigation.goBack();
    } else {
      setScreenStep((current) => current - 1);
    }
  };

  const addAged = async () => {
    try {
      const response = await api.post("/aged", newAged);
      if (response.status === 200) {
        setNewAged(null);
        navigation.navigate("Home");
      }
    } catch (err) {
      Alert.alert("Ops!", "Algo de errado aconteceu ao cadastrar o idoso.");
    }
  };

  const isScreenEnabled: boolean = useMemo(() => {
    if (newAged) {
      const { name, address, city, state, contacts, gender } = newAged;
      switch (screenStep) {
        case 0:
          return Boolean(name && name.length > 0);
        case 1:
          return Boolean(gender && gender.length > 0);
        case 2:
          return Boolean(
            address &&
              address.length > 0 &&
              city &&
              city.length > 0 &&
              state &&
              state.length > 0
          );
        case 3:
          return Boolean(
            contacts &&
              contacts?.length > 0 &&
              contacts[0].description.length > 12 &&
              contacts[0].type != null &&
              contacts[0].name.length > 0
          );
      }
    }
    return false;
  }, [screenStep, newAged]);

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Header onBack={handlePreviosuStep} />
        {screens[screenStep]}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              styles.button,
              isScreenEnabled ? styles.activeButton : styles.disabledButton,
            ]}
            activeOpacity={0.5}
            disabled={!isScreenEnabled}
            onPress={async () => await handleNextStep()}
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
