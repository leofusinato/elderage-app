import { Platform, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../../global/styles";

const paddingTop = Platform.OS === "android" ? 0 : 24;

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight() + paddingTop,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 20,
    color: theme.colors.primary,
  },
  subtitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.primary,
  },
});
