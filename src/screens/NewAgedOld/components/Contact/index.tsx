import React, { useState } from "react";
import { View, Text } from "react-native";
import Input from "../../../../components/Inputs/Input";
import { useNewAged } from "../../../../contexts/NewAgedProvider";
import { theme } from "../../../../global/styles";

import { styles } from "./styles";

export function Contact() {
  const { setProps } = useNewAged();
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome de um contato imediato</Text>
      <Input
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
      />
      <Text style={styles.text}>Telefone</Text>
      <Input
        placeholder="(00) 000000000"
        onChangeText={(phone) =>
          setProps({ contacts: [{ type: 1, description: phone, name }] })
        }
        mask={"([00]) [999999999]"}
        style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
      />
    </View>
  );
}
