import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: getStatusBarHeight() + 16,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 12,
    backgroundColor: theme.colors.white,
  },
  backText: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    marginLeft: 8,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.primary,
  },
});
