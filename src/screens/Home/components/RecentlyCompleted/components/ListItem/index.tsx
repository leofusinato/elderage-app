import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../../../global/styles";

export function ListItem() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <FontAwesome5
          name="check-circle"
          size={24}
          color={theme.colors.success}
          style={styles.icon}
        />
        <View>
          <Text style={styles.title}>Calango Rodrigues</Text>
          <Text style={styles.subtitle}>Remédio anemia</Text>
        </View>
      </View>
      <View style={styles.right}>
        <FontAwesome5
          name="clock"
          size={12}
          color={theme.colors.success}
          style={styles.icon}
        />
        <Text>8h30</Text>
      </View>
    </View>
  );
}
