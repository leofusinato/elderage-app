import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { SuccessInviteNavigationProps } from "../../global/route.types";
import { theme } from "../../global/styles";
import { styles } from "./styles";

export function SuccessInvite({ navigation }: SuccessInviteNavigationProps) {
  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.close}
        onPress={handleBack}
      >
        <AntDesign name="close" size={25} color={theme.colors.secondary} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require("../../assets/images/success-invite.png")} />
        <Text style={styles.title}>Convite enviado</Text>
        <Text style={styles.message}>
          Assim que o convite for aceito você será notificado e o convidado terá
          acesso ao idoso
        </Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handleBack}
      >
        <Text style={styles.ok}>Legal! 👍 </Text>
      </TouchableOpacity>
    </View>
  );
}
