import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../../../../../components/Button";

import { styles } from "./styles";

type Props = {
  date: number;
  weekDay: string;
  onChangeDate: (day: number) => void;
  selected: boolean;
};

export function DateItem({ date, weekDay, onChangeDate, selected }: Props) {
  return (
    <Button style={styles.container} onPress={() => onChangeDate(date)}>
      <View
        style={[
          styles.dateContainer,
          selected ? styles.selectedDateContainer : {},
        ]}
      >
        <Text
          style={[styles.dateText, selected ? styles.selectedDateText : {}]}
        >
          {date}
        </Text>
      </View>
      <Text style={[styles.weekDay, selected ? styles.selectedWeekDay : {}]}>
        {weekDay}
      </Text>
    </Button>
  );
}
