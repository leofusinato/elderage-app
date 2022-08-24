import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  birthContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    marginTop: 32,
    padding: 24,
  },
  name: {
    marginBottom: 4,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.neutral500,
  },
  birthText: {
    marginBottom: 16,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.neutral300,
  },
});
