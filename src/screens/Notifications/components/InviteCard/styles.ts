import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: theme.colors.white,
    borderWidth: 0.5,
    borderColor: theme.colors.neutral300,
    borderRadius: 8,
    marginBottom: 12,
  },
  username: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.primary,
    marginLeft: 8,
  },
  message: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.neutral700,
    marginTop: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    borderRadius: 4,
  },
  actionText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
  },
  circle: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primaryBackground,
    borderRadius: 12.5,
  },
});
