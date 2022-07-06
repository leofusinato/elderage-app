import { StyleSheet } from "react-native";
import { theme } from "../../../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.colors.neutral100,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.neutral300,
    marginRight: 16,
  },
  name: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.neutral700,
  },
});
