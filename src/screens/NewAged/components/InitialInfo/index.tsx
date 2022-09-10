import React from "react";

import { Text, View } from "react-native";
import { DateSelector } from "../../../../components/DateSelector";
import AuthInput from "../../../../components/Inputs/AuthInput";
import { useNewAged } from "../../../../contexts/NewAgedProvider";
import { theme } from "../../../../global/styles";

import { styles } from "./styles";

export function InitialInfo() {
  const { setProps } = useNewAged();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome do Idoso</Text>
      <AuthInput
        leftIcon="user"
        style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
        onChangeText={(name) => setProps({ name })}
      />
      <View style={styles.birthContainer}>
        <Text style={styles.birthText}>Data de nascimento</Text>
        <DateSelector onSelect={(birthdate) => setProps({ birthdate })} />
      </View>
    </View>
  );
}
