import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../../../../global/styles";

const CARD_WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH / 2 - 16,
    marginRight: 16,
    padding: 16,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.neutral100,
  },
  firstContainer: {
    backgroundColor: theme.colors.primary,
    borderWidth: 0,
    marginLeft: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.neutral100,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 23,
  },
  firstHeaderInfoContainer: {
    backgroundColor: theme.colors.white,
  },
  clock: {
    marginRight: 6,
  },
  hour: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.primary,
  },
  name: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.neutral700,
  },
  firstCardName: {
    color: theme.colors.white,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.neutral500,
    flex: 1,
  },
  firstDescription: {
    color: theme.colors.white,
  },
});
