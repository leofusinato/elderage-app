import React from "react";

import { StyleProp, View, ViewStyle } from "react-native";

import { styles } from "./styles";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  hidden?: boolean;
};

export function Row({ children, style, hidden = false }: Props) {
  return (
    <View style={[styles.container, style, hidden ? { opacity: 0 } : {}]}>
      {children}
    </View>
  );
}
