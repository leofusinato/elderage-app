import React from "react";

import { Text, View } from "react-native";
import { AgedRow } from "./components/AgedRow";

import { styles } from "./styles";

export function AgedsList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idosos registrados</Text>

      <AgedRow />
      <AgedRow />
      <AgedRow />
    </View>
  );
}
