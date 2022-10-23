import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BackButton } from "../../components/BackButton";
import Input from "../../components/Inputs/Input";
import { Row } from "../../components/Row";

import { SendInviteNavigationProps } from "../../global/route.types";
import { api } from "../../services/api";
import { theme } from "../../global/styles";
import { styles } from "./styles";

export function SendInvite({ navigation, route }: SendInviteNavigationProps) {
  const [email, setEmail] = useState("");

  const handleSendInvite = async () => {
    try {
      const response = await api.post("invite", {
        aged_id: route.params.agedId,
        guest_email: email.toLowerCase(),
      });
      if (response.status === 200) {
        navigation.navigate("SuccessInvite");
      }
    } catch (err: any) {
      if (err.response.status === 404) {
        Alert.alert("Ops", "Não encontramos nenhum usuário com este e-mail.");
      } else {
        Alert.alert("Ops", "Erro ao enviar o convite.");
      }
    }
  };

  const valid = email.length > 0;

  return (
    <View style={styles.container}>
      <Row style={styles.header}>
        <BackButton />
        <Text style={styles.back}>Voltar</Text>
      </Row>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.email}>Informe o e-mail</Text>
        <Text style={styles.description}>
          Enviaremos um link de confirmação para o e-mail do cuidador convidado.{" "}
        </Text>
        <Input
          leftIcon={"mail"}
          placeholder="Endereço de e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoFocus
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={handleSendInvite}
        disabled={!valid}
        activeOpacity={0.5}
        style={[
          styles.button,
          {
            backgroundColor: valid
              ? theme.colors.success
              : theme.colors.neutral100,
          },
        ]}
      >
        <Text style={styles.send}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
