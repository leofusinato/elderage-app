import React, { useState } from "react";

import { Text, View } from "react-native";
import { Selector } from "../../../../components/DateSelector/components/Selector";
import AuthInput from "../../../../components/Inputs/AuthInput";
import { Row } from "../../../../components/Row";
import { useNewAged } from "../../../../contexts/NewAgedProvider";
import { theme } from "../../../../global/styles";
import { states } from "../../../../utils/address";

import { styles } from "./styles";

export function Address() {
  const { setProps } = useNewAged();

  return (
    <View style={styles.container}>
      <Text style={styles.address}>Insira o endereço de moradia do idoso</Text>
      <AuthInput
        leftIcon="home"
        onChangeText={(address) => setProps({ address })}
        style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
      />
      <Text style={styles.address}>Insira a cidade e o estado</Text>
      <Row>
        <AuthInput
          onChangeText={(city) => setProps({ city })}
          style={{
            backgroundColor: theme.colors.white,
            borderWidth: 0,
            flex: 0.8,
            marginRight: 8,
          }}
        />
        <Selector
          onSelect={(state) => setProps({ state })}
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
