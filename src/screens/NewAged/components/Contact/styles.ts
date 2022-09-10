import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  text: {
    marginBottom: 4,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.neutral500,
  },
});
