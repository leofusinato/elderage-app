import React, { ReactNode } from "react";

import { ActivityIndicator, View } from "react-native";
import { theme } from "../../global/styles";

import { styles } from "./styles";

type Props = {
  loading: boolean;
  children: ReactNode;
};

export function Loading({ loading, children }: Props) {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={theme.colors.primary} />
      </View>
    );
  }
  return <>{children}</>;
}
