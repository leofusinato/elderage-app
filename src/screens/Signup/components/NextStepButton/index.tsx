import React from "react";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../../../../components/Button";

import { styles } from "./styles";
import { theme } from "../../../../global/styles";

type Props = {
  onPress: () => void;
};

export function NextStepButton({ onPress }: Props) {
  return (
    <Button style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Próximo</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={25}
        color={theme.colors.primary}
      />
    </Button>
  );
}
