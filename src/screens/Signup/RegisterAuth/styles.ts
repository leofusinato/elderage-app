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
  almost: {
    fontFamily: theme.fonts.regular,
    fontSize: 24,
    color: theme.colors.neutral700,
    marginTop: 60,
    marginBottom: 32,
  },
  signupText: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  buttonContainer: {
    backgroundColor: theme.colors.success,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
    fontSize: 16,
  },
});
