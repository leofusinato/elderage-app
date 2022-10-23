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
  canRemove: boolean;
};

export function TimePicker({
  value,
  onChangeValue,
  onAdd,
  onRemove,
  canRemove,
}: Props) {
  const [visible, setVisible] = useState<boolean>(false);
  const [internalValue, setInternalValue] = useState<string>(value);

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
        {/* <TouchableOpacity
          activeOpacity={0.5}
          onPress={onAdd}
          style={[
            styles.button,
            { backgroundColor: theme.colors.success, marginRight: 16 },
          ]}
        >
          <Ionicons name="add" size={24} color={theme.colors.white} />
        </TouchableOpacity> */}
        <TouchableOpacity
          activeOpacity={0.5}
          disabled={!canRemove}
          onPress={onRemove}
          style={[
            styles.button,
            {
              backgroundColor: canRemove
                ? theme.colors.secondary
                : theme.colors.neutral100,
            },
          ]}
        >
          <Ionicons
            name="remove"
            size={24}
            color={canRemove ? theme.colors.white : theme.colors.neutral100}
          />
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
