import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {},
  main: {
    paddingHorizontal: 16,
  },
  removeButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: getBottomSpace() + 16,
  },
  remove: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.error500,
  },
});
