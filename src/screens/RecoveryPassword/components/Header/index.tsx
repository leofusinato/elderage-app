import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Text, TouchableOpacity, View } from "react-native";
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={30}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <Text style={styles.signupText}>Recupere a sua senha</Text>
      <AntDesign name="close" size={20} color={theme.colors.white} />
    </View>
  );
}
