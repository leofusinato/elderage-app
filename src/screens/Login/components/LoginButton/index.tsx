import React from "react";
import { Text, ViewStyle, StyleProp } from "react-native";
import { Button } from "../../../../components/Button";
import { styles } from "./styles";

type Props = {
  onPress: () => Promise<void>;
  description?: string;
  style?: StyleProp<ViewStyle>;
};

export default function LoginButton({ onPress, description, style }: Props) {
  return (
    <Button style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{description || "Entrar"}</Text>
    </Button>
  );
}
