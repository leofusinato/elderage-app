import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../../../global/styles";

type Props = {
  name: string;
  gender: string;
};

export function AgedRow({ name, gender }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <View style={styles.image}>
          <MaterialCommunityIcons
            name={gender === "M" ? "face-man" : "face-woman"}
            size={30}
            color={theme.colors.primary}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={theme.colors.primary} />
    </TouchableOpacity>
  );
}
