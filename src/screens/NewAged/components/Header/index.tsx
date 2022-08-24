import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../global/styles";
import { Row } from "../../../../components/Row";

type Props = {
  onBack: () => void;
  disabled: boolean;
};

export function Header({ onBack, disabled }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} disabled={disabled}>
        <Row>
          <Entypo
            name="chevron-left"
            size={28}
            color={disabled ? theme.colors.neutral300 : theme.colors.neutral700}
          />
          <Text
            style={[
              styles.backText,
              {
                color: disabled
                  ? theme.colors.neutral300
                  : theme.colors.neutral700,
              },
            ]}
          >
            Voltar
          </Text>
        </Row>
      </TouchableOpacity>
      <Text style={styles.title}>Novo Cadastro</Text>
      <Row hidden>
        <Entypo name="chevron-left" size={28} color={theme.colors.neutral300} />
        <Text style={styles.backText}>Voltar</Text>
      </Row>
    </View>
  );
}
