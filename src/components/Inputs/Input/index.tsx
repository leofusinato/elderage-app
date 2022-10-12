import React, { useState } from "react";
import { View, ViewStyle, StyleProp, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import TextInputMask, {
  TextInputMaskProps,
} from "react-native-text-input-mask";
import { theme } from "../../../global/styles";

type Props = {
  placeholder?: string;
  leftIcon?: any;
  style?: StyleProp<ViewStyle>;
  isPassword?: boolean;
} & TextInputMaskProps;

export default function Input({
  placeholder = "",
  leftIcon,
  style,
  isPassword,
  ...props
}: Props) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={[styles.container, style]}>
      <Feather name={leftIcon} size={20} style={styles.icon} />
      <TextInputMask
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={theme.colors.neutral300}
        secureTextEntry={isPassword && hidePassword}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Feather
            name={!hidePassword ? "eye" : "eye-off"}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
