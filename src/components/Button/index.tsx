import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export function Button({ children, ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.5}>
      {children}
    </TouchableOpacity>
  );
}
