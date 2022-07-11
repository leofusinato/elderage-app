import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    justifyContent: "space-between",
  },
  signupText: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary,
  },
});
