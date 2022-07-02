import { StyleSheet } from "react-native";
import { theme } from "../../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: theme.colors.neutral100,
    width: "100%",
    borderRadius: 8,
    marginBottom: 6,
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.neutral300,
    marginLeft: 10,
  },
});
