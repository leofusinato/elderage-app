import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Alert, Text } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";
import { TaskProps } from "../../global/models/task";
import { theme } from "../../global/styles";
import { api } from "../../services/api";
import { getLocaledDate } from "../../utils/date";

type Props = {
  data: TaskProps;
  visible: boolean;
  onClose: () => void;
  onOpen: () => void;
  onDone: () => Promise<void>;
  color?: string;
};

export function TaskMenu({
  data,
  visible,
  onClose,
  onOpen,
  color,
  onDone,
}: Props) {
  const completeTask = async () => {
    try {
      let body: any = {
        medication_id: data.medication.id,
        date_hour_applied: new Date(),

        // alter table checkin_medications
        // alter column date_hour_applied type timestamp with time zone
      };
      if (data.medication.time_type === 2) {
        body.schedule_id = data.schedule_id;
      }
      await api.post("/checkin", body);
      await onDone();
    } catch {
      Alert.alert("Ops", "Houve um erro ao completar a tarefa");
    }
  };

  const handleConfirm = () => {
    onClose();
    Alert.alert(
      "Confirmação",
      "Você tem certeza que deseja concluir esta tarefa?",
      [
        { text: "Não" },
        { text: "Sim", onPress: async () => await completeTask() },
      ]
    );
  };

  return (
    <Menu
      visible={visible}
      anchor={
        <Text onPress={onOpen}>
          <Entypo
            name="dots-three-vertical"
            size={16}
            color={color || theme.colors.white}
          />
        </Text>
      }
      onRequestClose={onClose}
    >
      <MenuItem onPress={handleConfirm}>Concluir</MenuItem>
    </Menu>
  );
}
