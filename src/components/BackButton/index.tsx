import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { theme } from "../../global/styles";
import { Button } from "../Button";

type Props = {
  color?: string;
  size?: number;
};

export function BackButton({ color, size }: Props) {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.goBack()}>
      <AntDesign
        name="left"
        size={size || 30}
        color={color || theme.colors.neutral700}
      />
    </Button>
  );
}
