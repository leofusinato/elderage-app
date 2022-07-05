import { StyleSheet } from "react-native";
import { theme } from "../../../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    backgroundColor: theme.colors.success100,
    marginBottom: 8,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.success,
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.success,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 24,
  },
});
