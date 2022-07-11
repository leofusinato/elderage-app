import React from "react";
import { TouchableOpacity, Text, ViewStyle, StyleProp } from "react-native";
import { styles } from "./styles";

type Props = {
  onPress: () => Promise<void>;
  description?: string;
  style?: StyleProp<ViewStyle>;
};

export default function LoginButton({ onPress, description, style }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={styles.text}>{description || "Entrar"}</Text>
    </TouchableOpacity>
  );
}
