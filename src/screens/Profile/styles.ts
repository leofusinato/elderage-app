import { Platform, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles";

const paddingTop = Platform.OS === "android" ? 0 : 32;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral100,
  },
  signOut: {
    alignItems: "center",
    marginBottom: 16,
  },
  logout: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.error500,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: getStatusBarHeight() + paddingTop,
    paddingBottom: 32,
  },
  image: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.neutral100,
    borderRadius: 35,
  },
  name: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.neutral700,
    marginTop: 16,
  },
  email: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.neutral500,
  },
});
