import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";
import { Row } from "../../../../components/Row";

import { styles } from "./styles";
import { theme } from "../../../../global/styles";
import { getTimeFromDate } from "../../../../utils/date";

type Props = {
  value: string;
  onChangeValue: (value: string) => void;
  onAdd: () => void;
  onRemove: () => void;
};

export function TimePicker({ value, onChangeValue, onAdd, onRemove }: Props) {
  const [visible, setVisible] = useState<boolean>(false);
  const [internalValue, setInternalValue] = useState<string>("");

  const handleConfirm = (date: Date) => {
    const formatted = getTimeFromDate(date);
    setVisible(false);
    setInternalValue(formatted);
    onChangeValue(formatted);
  };

  return (
    <>
      <Row style={styles.container}>
        <TouchableOpacity
          style={styles.timeContainer}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.time}>{internalValue}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onAdd}
          style={[
            styles.button,
            { backgroundColor: theme.colors.success, marginRight: 16 },
          ]}
        >
          <Ionicons name="add" size={24} color={theme.colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onRemove}
          style={[styles.button, { backgroundColor: theme.colors.secondary }]}
        >
          <Ionicons name="remove" size={24} color={theme.colors.white} />
        </TouchableOpacity>
      </Row>
      <DateTimePickerModal
        isVisible={visible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={() => setVisible(false)}
      />
    </>
  );
}
