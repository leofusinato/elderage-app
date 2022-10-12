import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../global/styles";

type Props = {
  description: string;
  onPress: () => void;
};

export function AddButton({ description, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Ionicons
        name="add-circle-outline"
        size={24}
        color={theme.colors.primary}
      />
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}
