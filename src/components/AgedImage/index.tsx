import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { theme } from "../../global/styles";

type Props = {
  gender: string;
  color?: string;
  size: number;
  centered?: boolean;
};

export function AgedImage({ gender, color, size, centered }: Props) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignSelf: centered ? "center" : "auto",
      }}
    >
      <MaterialCommunityIcons
        name={gender === "M" ? "face-man" : "face-woman"}
        size={size}
        color={color || theme.colors.primary}
      />
    </View>
  );
}
