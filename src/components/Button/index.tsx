import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { theme } from "../../global/styles";

type Props = {
  loading?: boolean;
} & TouchableOpacityProps;

export function Button({ loading, children, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.5}
      disabled={loading || rest.disabled}
    >
      {loading ? <ActivityIndicator color={theme.colors.white} /> : children}
    </TouchableOpacity>
  );
}
