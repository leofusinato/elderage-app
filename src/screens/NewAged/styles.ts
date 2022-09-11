import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 21,
    backgroundColor: theme.colors.white,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: theme.colors.success,
  },
  disabledButton: {
    backgroundColor: theme.colors.neutral100,
  },
  next: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.white,
  },
});
