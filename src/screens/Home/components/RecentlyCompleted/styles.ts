import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.success,
  },
  seeAll: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.secondary,
  },
  emptyList: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.neutral300,
    textAlign: "center",
  },
});
