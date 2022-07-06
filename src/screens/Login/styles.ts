import { StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 40,
    backgroundColor: theme.colors.greenBackground,
    alignItems: "center",
  },
  main: {
    flex: 1,
    backgroundColor: theme.colors.white,
    width: "100%",
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
    paddingTop: 32,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 50,
    color: theme.colors.primary,
  },
  forgotPassword: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 24,
  },
  footer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  registerButton: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
    fontSize: 16,
  },
});
