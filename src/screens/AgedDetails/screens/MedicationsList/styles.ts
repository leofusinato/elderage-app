import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 24,
    paddingTop: getStatusBarHeight() + 54,
    paddingBottom: 36,
  },
  list: {
    marginTop: 56,
  },
});
