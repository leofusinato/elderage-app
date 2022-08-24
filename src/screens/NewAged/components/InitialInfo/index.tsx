import React from "react";

import { Text, View } from "react-native";
import { DateSelector } from "../../../../components/DateSelector";
import AuthInput from "../../../../components/Inputs/AuthInput";
import { theme } from "../../../../global/styles";

import { styles } from "./styles";

export function InitialInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome do Idoso</Text>
      <AuthInput
        leftIcon="user"
        style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
      />
      <View style={styles.birthContainer}>
        <Text style={styles.birthText}>Data de nascimento</Text>
        <DateSelector />
      </View>
    </View>
  );
}
