import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../../../../../global/styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../../../../../global/route.types";
import { Button } from "../../../../../../components/Button";

type Props = {
  id: string;
  name: string;
  gender: string;
};

export function AgedRow({ id, name, gender }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList, "Home">>();

  return (
    <Button
      style={styles.container}
      onPress={() => {
        navigation.navigate("AgedDetails", { id });
      }}
    >
      <View style={styles.left}>
        <View style={styles.image}>
          <MaterialCommunityIcons
            name={gender === "M" ? "face-man" : "face-woman"}
            size={30}
            color={theme.colors.primary}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={theme.colors.primary} />
    </Button>
  );
}
