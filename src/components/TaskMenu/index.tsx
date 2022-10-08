import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Alert, Text } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";
import { NextTaskProps } from "../../global/models/task";
import { theme } from "../../global/styles";
import { api } from "../../services/api";

type Props = {
  data: NextTaskProps;
  visible: boolean;
  onClose: () => void;
  onOpen: () => void;
  color?: string;
};

export function TaskMenu({ data, visible, onClose, onOpen, color }: Props) {
  const completeTask = async () => {
    try {
      let body: any = {
        medication_id: data.id,
        date_hour_applied: new Date(),
      };
      if (data.time_type === 2) {
        body.schedule_id = data.schedule_id;
      }
      await api.post("/checkin", body);
      Alert.alert("Ops", "Ok");
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
