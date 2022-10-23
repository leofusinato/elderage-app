import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Row } from "../Row";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../global/styles";
import { styles } from "./styles";

type Props = {
  title: string;
  headerRight?: React.ReactNode;
};

export function Header({ title, headerRight }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Row>
          <Entypo
            name="chevron-left"
            size={28}
            color={theme.colors.neutral700}
          />
          <Text
            style={[
              styles.backText,
              {
                color: theme.colors.neutral700,
              },
            ]}
          >
            Voltar
          </Text>
        </Row>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {headerRight || (
        <Row hidden>
          <Entypo
            name="chevron-left"
            size={28}
            color={theme.colors.neutral300}
          />
          <Text style={styles.backText}>Voltar</Text>
        </Row>
      )}
    </View>
  );
}
