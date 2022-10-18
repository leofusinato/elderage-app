import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
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
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  name: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 24,
  },
  hour: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    marginLeft: 8,
  },
  descriptionContainer: {
    marginTop: 8,
    padding: 8,
    borderRadius: 4,
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
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
  place: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    marginLeft: 12,
  },
});
