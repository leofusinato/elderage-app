import { StyleSheet } from "react-native";
import { theme } from "../../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  row: {
    justifyContent: "space-between",
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.neutral700,
  },
});
