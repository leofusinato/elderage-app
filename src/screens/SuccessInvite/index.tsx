import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Button } from "../../components/Button";

import { SuccessInviteNavigationProps } from "../../global/route.types";
import { theme } from "../../global/styles";
import { styles } from "./styles";

export function SuccessInvite({ navigation }: SuccessInviteNavigationProps) {
  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Button style={styles.close} onPress={handleBack}>
        <AntDesign name="close" size={25} color={theme.colors.secondary} />
      </Button>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require("../../assets/images/success-invite.png")} />
        <Text style={styles.title}>Convite enviado</Text>
        <Text style={styles.message}>
          Assim que o convite for aceito você será notificado e o convidado terá
          acesso ao idoso
        </Text>
      </ScrollView>
      <Button style={styles.button} onPress={handleBack}>
        <Text style={styles.ok}>Legal! 👍 </Text>
      </Button>
    </View>
  );
}
