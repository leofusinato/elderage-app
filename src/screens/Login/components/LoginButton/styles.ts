import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.success,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8
  },
  text: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
    fontSize: 16
  }
});
