import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 16,
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary700,
  },
  seeAll: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.secondary,
  },
});
