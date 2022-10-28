import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../global/styles";
import { Button } from "../../../../components/Button";

type Props = {
  description: string;
  onPress: () => void;
};

export function AddButton({ description, onPress }: Props) {
  return (
    <Button style={styles.button} onPress={onPress}>
      <Ionicons
        name="add-circle-outline"
        size={24}
        color={theme.colors.primary}
      />
      <Text style={styles.description}>{description}</Text>
    </Button>
  );
}
