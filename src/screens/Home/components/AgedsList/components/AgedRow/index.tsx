import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../../../global/styles";

export function AgedRow() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <View style={styles.image} />
        <Text style={styles.name}>Arnold S. Weiss</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={theme.colors.primary} />
    </TouchableOpacity>
  );
}
