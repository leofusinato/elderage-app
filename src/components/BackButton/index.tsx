import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../Button";

import { theme } from "../../global/styles";
import { Row } from "../Row";

type Props = {
  color?: string;
  size?: number;
  description?: string;
};

export function BackButton({ color, size, description }: Props) {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.goBack()}>
      <Row>
        <AntDesign
          name="left"
          size={size || 30}
          color={color || theme.colors.neutral700}
        />
        {description && (
          <Text
            style={{
              marginLeft: 8,
              fontFamily: theme.fonts.regular,
              fontSize: 14,
              color: theme.colors.neutral700,
            }}
          >
            {description}
          </Text>
        )}
      </Row>
    </Button>
  );
}
