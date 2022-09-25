import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { theme } from "../../global/styles";

type Props = {
  color?: string;
  size?: number;
};

export function BackButton({ color, size }: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign
        name="left"
        size={size || 30}
        color={color || theme.colors.neutral700}
      />
    </TouchableOpacity>
  );
}
