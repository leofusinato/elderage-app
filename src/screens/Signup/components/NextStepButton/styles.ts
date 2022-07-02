import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary,
    marginRight: 8,
  },
});
