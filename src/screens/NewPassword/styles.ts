import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.greenBackground,
    paddingTop: getStatusBarHeight() + 40,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  newPassword: {
    fontFamily: theme.fonts.regular,
    fontSize: 24,
    color: theme.colors.neutral700,
    textAlign: "center",
    marginTop: "15%",
  },
  loading: {
    marginTop: 40,
  },
  content: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
  button: {
    marginTop: 40,
  },
});
