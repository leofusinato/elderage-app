import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 32,
    borderBottomStartRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 46,
  },
  center: {
    alignItems: "center",
  },
  name: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.neutral700,
    marginTop: 16,
  },
  actions: {
    justifyContent: "space-between",
  },
});
