import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { Row } from "../Row";
import { Button } from "../Button";

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
      <Button onPress={() => navigation.goBack()}>
        <Row>
          <Entypo
            name="chevron-left"
            size={28}
            color={theme.colors.neutral700}
          />
        </Row>
      </Button>
      <Text style={styles.title}>{title}</Text>
      {headerRight || (
        <Row hidden>
          <Entypo
            name="chevron-left"
            size={28}
            color={theme.colors.neutral300}
          />
        </Row>
      )}
    </View>
  );
}
