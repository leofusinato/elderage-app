import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  name: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.white,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: theme.colors.white,
    borderRadius: 24,
  },
  hour: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.success,
    marginLeft: 8,
  },
  descriptionContainer: {
    marginTop: 8,
    padding: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.success,
  },
  footer: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  local: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.white,
    marginLeft: 12,
  },
});
