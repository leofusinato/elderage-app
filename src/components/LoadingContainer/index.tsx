import React from "react";
import { ActivityIndicator, View } from "react-native";
import { theme } from "../../global/styles";

type Props = {
  children: React.ReactNode;
  visible: boolean;
};

export function LoadingContainer({ visible, children }: Props) {
  return visible ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={theme.colors.neutral700} />
    </View>
  ) : (
    <>{children}</>
  );
}
