import React, { useState } from "react";
import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { NextStepButton } from "../components/NextStepButton";

import { AppStackParamList } from "../../../global/route.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { theme } from "../../../global/styles";
import { styles } from "./styles";
import { Button } from "../../../components/Button";

export function RegisterName() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AppStackParamList, "RegisterName">
    >();
  const [name, setName] = useState("");

  const handleNextStep = () => {
    if (name) {
      setName(name);
      navigation.navigate("RegisterAuth", { name: name });
    } else {
      Alert.alert("", "Por favor, informe um nome");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.row}>
          <AntDesign name="close" size={20} color={theme.colors.white} />
          <Text style={styles.signupText}>Cadastre-se aqui</Text>
          <Button onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={25} color={theme.colors.primary} />
          </Button>
        </View>

        <Text style={styles.yourName}>Qual seu nome?</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <View style={styles.footer}>
          <NextStepButton onPress={handleNextStep} />
        </View>
      </View>
    </ScrollView>
  );
}
