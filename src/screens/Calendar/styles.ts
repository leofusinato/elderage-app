import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: 16,
  },
  empty: {
    fontFamily: theme.fonts.medium,
    fontSize: 15,
    color: theme.colors.neutral500,
    textAlign: "center",
  },
});
