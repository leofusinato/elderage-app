import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { DateItem } from "./components/DateItem";

import { getAbbreviatedWeekDay, getDatesInRange } from "../../../../utils/date";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

export function Header() {
  const [date, setDate] = useState("");
  const scrollViewRef = useRef<FlatList>(null);
  const [dateInterval, setDateInterval] = useState<Date[]>([]);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const date = new Date();
    const firstDayInMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayInMont = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const intervalDates = getDatesInRange(firstDayInMonth, lastDayInMont);
    setDateInterval(intervalDates);
  }, []);

  const handleChangeDate = (day: number) => {
    setSelectedDay(day);
    scrollViewRef.current?.scrollToIndex({ viewPosition: 0.5, index: day - 1 });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.date} onPress={() => setShowPicker(true)}>
        <Text style={styles.dateText}>{date}</Text>
        <Entypo
          name="chevron-down"
          size={20}
          color={theme.colors.neutral700}
          style={styles.icon}
        />
      </TouchableOpacity>
      {/* <MonthPickerModal /> */}
      <FlatList
        data={dateInterval}
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <DateItem
              key={index}
              date={item.getDate()}
              weekDay={getAbbreviatedWeekDay(item.getDay())}
              onChangeDate={(day) => handleChangeDate(day)}
              selected={selectedDay == item.getDate()}
            />
          );
        }}
      />
    </View>
  );
}
