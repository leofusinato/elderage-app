import React, { useState } from "react";

import { Text, View } from "react-native";
import { Selector } from "../../../../components/DateSelector/components/Selector";
import AuthInput from "../../../../components/Inputs/AuthInput";
import { Row } from "../../../../components/Row";
import { theme } from "../../../../global/styles";
import { states } from "../../../../utils/address";

import { styles } from "./styles";

export function Address() {
  const [state, setState] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.address}>Insira o endereço de moradia do idoso</Text>
      <AuthInput
        leftIcon="home"
        style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
      />
      <Text style={styles.address}>Insira a cidade e o estado</Text>
      <Row>
        <AuthInput
          style={{
            backgroundColor: theme.colors.white,
            borderWidth: 0,
            flex: 0.8,
            marginRight: 8,
          }}
        />
        <Selector
          onSelect={(selected) => setState(selected)}
          data={states}
          placeholder="UF"
          style={{
            flex: 0.2,
            backgroundColor: theme.colors.white,
            borderRadius: 8,
            marginBottom: 16,
          }}
        />
      </Row>
    </View>
  );
}
