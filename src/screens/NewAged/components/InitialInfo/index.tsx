import React, { useEffect } from "react";

import { Text, View } from "react-native";
import { DateSelector } from "../../../../components/DateSelector";
import Input from "../../../../components/Inputs/Input";
import { useNewAged } from "../../../../contexts/NewAgedProvider";
import { theme } from "../../../../global/styles";

import { styles } from "./styles";

export function InitialInfo() {
  const { setProps } = useNewAged();

  useEffect(() => {
    setProps({ birthdate: "2000/01/01" });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome do Idoso</Text>
      <Input
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
