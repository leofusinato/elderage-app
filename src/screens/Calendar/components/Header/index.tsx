import React, { useState } from "react";
import { View } from "react-native";

import { theme } from "../../../../global/styles";
import { styles } from "./styles";
import CalendarStrip from "react-native-calendar-strip";
import { Moment } from "moment";

type Props = {
  onChangeDate: (date: Date) => void;
};

export function Header({ onChangeDate }: Props) {
  const [date, setDate] = useState(new Date());

  const handleChangeDate = (date: Moment) => {
    setDate(date.toDate());
    onChangeDate(date.toDate());
  };

  return (
    <View style={styles.container}>
      <CalendarStrip
        style={{ height: 120 }}
        scrollable
        headerText=""
        selectedDate={date}
        onDateSelected={handleChangeDate}
        calendarHeaderStyle={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.bold,
          fontWeight: "normal",
          fontSize: 20,
        }}
        dateNumberStyle={{
          color: theme.colors.primary,
          fontFamily: theme.fonts.regular,
          fontWeight: "normal",
          fontSize: 20,
        }}
        dateNameStyle={{
          color: theme.colors.neutral500,
          fontFamily: theme.fonts.regular,
          fontWeight: "300",
          fontSize: 12,
        }}
        highlightDateNumberStyle={{
          color: theme.colors.neutral100,
          fontFamily: theme.fonts.regular,
          fontWeight: "normal",
          fontSize: 20,
        }}
        dayContainerStyle={{
          backgroundColor: theme.colors.neutral100,
          borderRadius: 8,
        }}
        highlightDateContainerStyle={{
          backgroundColor: theme.colors.primary,
        }}
        highlightDateNameStyle={{
          color: theme.colors.white,
        }}
        leftSelector={[]}
        rightSelector={[]}
      />
    </View>
  );
}
