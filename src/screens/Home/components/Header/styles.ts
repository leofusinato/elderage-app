import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight() + 24,
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
