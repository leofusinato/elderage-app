import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.greenBackground,
    paddingTop: getStatusBarHeight() + 40,
  },
  main: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    paddingTop: 24,
    paddingHorizontal: 24,
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
