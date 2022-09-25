import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleProp, View, ViewStyle } from "react-native";
import { theme } from "../../global/styles";

type Props = {
  gender: string;
  color?: string;
  size: number;
  centered?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function AgedImage({ gender, color, size, centered, style }: Props) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          alignSelf: centered ? "center" : "auto",
        },
        style,
      ]}
    >
      <MaterialCommunityIcons
        name={gender === "M" ? "face-man" : "face-woman"}
        size={size}
        color={color || theme.colors.primary}
      />
    </View>
  );
}
