import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 16,
    paddingTop: getStatusBarHeight() + 60,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.neutral700,
    marginLeft: 8,
  },
});
