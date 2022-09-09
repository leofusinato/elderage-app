import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  card: {
    padding: 16,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
  },
  header: {
    backgroundColor: theme.colors.primaryBackground,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.primary,
  },
  gender: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
  activeGender: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.neutral700,
  },
  inactiveGender: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.neutral500,
  },
});
