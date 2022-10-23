import { StyleSheet } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 16,
    paddingTop: getStatusBarHeight() + 60,
    paddingBottom: getBottomSpace() + 50,
  },
  close: {
    alignSelf: "flex-end",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 56,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 20,
    color: theme.colors.neutral700,
    marginTop: 16,
    marginBottom: 4,
  },
  message: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.neutral700,
    textAlign: "center",
    lineHeight: 21,
  },
  button: {
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: theme.colors.primary,
  },
  ok: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary,
  },
});
