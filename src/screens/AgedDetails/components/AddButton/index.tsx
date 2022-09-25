import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../global/styles";

type Props = {
  description: string;
};

export function AddButton({ description }: Props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
      <Ionicons
        name="add-circle-outline"
        size={24}
        color={theme.colors.primary}
      />
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}
