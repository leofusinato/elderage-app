import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  description: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary,
    marginLeft: 10,
  },
});
