import React, { useMemo, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Header } from "../../components/Header";
import Input from "../../components/Inputs/Input";
import { NewContactNavigationProps } from "../../global/route.types";

import { theme } from "../../global/styles";
import { api } from "../../services/api";
import { styles } from "./styles";

export function NewContact({ navigation, route }: NewContactNavigationProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const valid = useMemo(
    () => name.length > 0 && phone.length === 14,
    [name, phone]
  );

  const handleConfirm = async () => {
    try {
      const response = await api.post(`/aged/${route.params.agedId}/contact`, {
        type: 2,
        description: phone,
        name,
      });
      if (response.status === 200) {
        navigation.goBack();
      }
    } catch {
      Alert.alert("Ops", "Houve um problema para cadastrar o contato.");
    }
  };

  return (
    <>
      <Header title="Novo contato" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Nome do contato</Text>
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
        />
        <Text style={styles.text}>Telefone</Text>
        <Input
          placeholder="(00) 000000000"
          onChangeText={(phone) => {
            setPhone(phone);
          }}
          mask={"([00]) [999999999]"}
          style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            valid ? styles.activeButton : styles.disabledButton,
          ]}
          activeOpacity={0.5}
          disabled={!valid}
          onPress={async () => await handleConfirm()}
        >
          <Text style={styles.next}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
