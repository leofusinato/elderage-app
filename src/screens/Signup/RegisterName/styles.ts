import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.greenBackground,
  },
  main: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    paddingTop: 24,
    paddingHorizontal: 24,
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
    paddingBottom: 60,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  signupText: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary,
  },
  yourName: {
    fontFamily: theme.fonts.regular,
    fontSize: 24,
    color: theme.colors.neutral700,
    marginTop: 100,
    marginBottom: 56,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: theme.colors.neutral100,
    fontFamily: theme.fonts.regular,
    fontSize: 20,
    color: theme.colors.neutral300,
    textAlign: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
