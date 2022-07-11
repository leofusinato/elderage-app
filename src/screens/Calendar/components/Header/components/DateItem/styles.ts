import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../../../../global/styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  dateContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.neutral100,
  },
  selectedDateContainer: {
    backgroundColor: theme.colors.primary,
  },
  dateText: {
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.neutral500,
  },
  selectedDateText: {
    color: theme.colors.white,
  },
  weekDay: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.neutral500,
  },
  selectedWeekDay: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary,
  },
});
