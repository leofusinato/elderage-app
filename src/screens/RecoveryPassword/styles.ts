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
  sendCode: {
    fontFamily: theme.fonts.regular,
    fontSize: 24,
    color: theme.colors.neutral700,
    textAlign: "center",
    marginTop: "15%",
  },
  codeContainer: {
    marginHorizontal: 32,
    marginTop: 40,
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  loading: {
    marginTop: 40,
  },
});
