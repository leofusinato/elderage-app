import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    borderWidth: 1,
    borderColor: theme.colors.neutral,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginBottom: 16
  },
  icon: {
    color: theme.colors.neutral,
  },
  input: {
    flex: 1,
    marginLeft: 12,
  }
});
