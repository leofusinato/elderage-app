import React, { useState } from "react";
import { Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";

import { Row } from "../../../../components/Row";
import { Button } from "../../../../components/Button";

import { getTimeFromDate } from "../../../../utils/date";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

type Props = {
  value: string;
  onChangeValue: (value: string) => void;
  onRemove: () => void;
  canRemove: boolean;
};

export function TimePicker({
  value,
  onChangeValue,
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
        <Button style={styles.timeContainer} onPress={() => setVisible(true)}>
          <Text style={styles.time}>{internalValue}</Text>
        </Button>
        <Button
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
        </Button>
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
