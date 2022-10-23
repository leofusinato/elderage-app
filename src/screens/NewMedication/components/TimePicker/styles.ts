import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  timeContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginRight: 24,
  },
  time: {
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.neutral300,
  },
  button: {
    borderRadius: 8,
    padding: 8,
  },
});
