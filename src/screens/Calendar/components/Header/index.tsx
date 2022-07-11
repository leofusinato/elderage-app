import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { DateItem } from "./components/DateItem";

import { getAbbreviatedWeekDay, getDatesInRange } from "../../../../utils/date";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

export function Header() {
  const [dateInterval, setDateInterval] = useState<Date[]>([]);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  useEffect(() => {
    const date = new Date();
    const firstDayInMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayInMont = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const intervalDates = getDatesInRange(firstDayInMonth, lastDayInMont);
    setDateInterval(intervalDates);
  }, []);

  useEffect(() => {
    console.log(selectedDay);
  }, [selectedDay]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.date}>
        <Text style={styles.dateText}>Julho, 2022</Text>
        <Entypo
          name="chevron-down"
          size={20}
          color={theme.colors.neutral700}
          style={styles.icon}
        />
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {dateInterval.map((date, index) => (
          <DateItem
            key={index}
            date={date.getDate()}
            weekDay={getAbbreviatedWeekDay(date.getDay())}
            onChangeDate={(day) => setSelectedDay(day)}
            selected={selectedDay == date.getDate()}
          />
        ))}
      </ScrollView>
    </View>
  );
}
