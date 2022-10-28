import React from "react";
import { Text, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "../../../../components/Button";

import { AppStackParamList } from "../../../../global/route.types";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

export function Header() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AppStackParamList, "RecoveryPassword">
    >();

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={30}
          color={theme.colors.primary}
        />
      </Button>
      <Text style={styles.signupText}>Recupere a sua senha</Text>
      <AntDesign name="close" size={20} color={theme.colors.white} />
    </View>
  );
}
