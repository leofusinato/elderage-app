import { StyleSheet } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
    paddingTop: getStatusBarHeight(),
    paddingBottom: getBottomSpace() + 40,
  },
  header: {
    marginTop: 32,
  },
  back: {
    marginLeft: 8,
  },
  email: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.neutral700,
    marginTop: 50,
    marginBottom: 8,
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    lineHeight: 21,
    color: theme.colors.neutral700,
    marginBottom: 48,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  send: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.white,
  },
});
