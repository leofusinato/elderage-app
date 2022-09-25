import { Entypo } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Row } from "../../../../../components/Row";
import { theme } from "../../../../../global/styles";

import { styles } from "./styles";

type Props = {
  description: string;
  onPress: () => void;
};

export function ItemRow({ description, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Row style={styles.row}>
        <Text>{description}</Text>
        <Entypo
          name="chevron-right"
          size={30}
          color={theme.colors.neutral700}
        />
      </Row>
    </TouchableOpacity>
  );
}
