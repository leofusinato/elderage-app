import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 40,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.primary700,
    marginBottom: 4,
  },
});
