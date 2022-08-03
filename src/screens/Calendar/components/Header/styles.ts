import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight() + 40,
    marginBottom: 32,
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.neutral700,
  },
  icon: {
    marginLeft: 12,
  },
  scroll: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
