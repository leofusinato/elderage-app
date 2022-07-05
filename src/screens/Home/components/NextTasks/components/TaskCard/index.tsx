import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../../../global/styles";

type Props = {
  first: boolean;
};

export function TaskCard({ first }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, first ? styles.firstContainer : {}]}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View style={styles.image} />
        <View style={styles.headerInfoContainer}>
          <FontAwesome5
            name="clock"
            size={12}
            color={theme.colors.primary}
            style={styles.clock}
          />
          <Text style={styles.hour}>9h30</Text>
        </View>
      </View>
      <Text style={[styles.name, first ? styles.firstCardName : {}]}>
        Hérciles Jesus
      </Text>
      <View style={styles.footer}>
        <Text
          numberOfLines={1}
          style={[styles.description, first ? styles.firstDescription : {}]}
        >
          Dipirona
        </Text>
        <TouchableOpacity
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
        >
          <Entypo
            name="dots-three-vertical"
            size={16}
            color={first ? theme.colors.white : theme.colors.neutral500}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
