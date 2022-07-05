import React from "react";

import { Text, View } from "react-native";
import { useAuth } from "../../../../contexts/AuthProvider";

import { styles } from "./styles";

export function Header() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>{user?.name}</Text>
    </View>
  );
}
