import React from "react";

import { Text, View } from "react-native";
import { AgedProps } from "../../../../global/models/aged";
import { AgedRow } from "./components/AgedRow";

import { styles } from "./styles";

type Props = {
  data: AgedProps[];
};

export function AgedsList({ data }: Props) {
  if (data.length === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idosos registrados</Text>

      {data.map((aged) => (
        <AgedRow key={aged.id} gender={aged.gender} name={aged.name} />
      ))}
    </View>
  );
}
