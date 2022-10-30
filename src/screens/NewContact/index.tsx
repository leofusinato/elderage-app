import React, { useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import Input from "../../components/Inputs/Input";

import { NewContactNavigationProps } from "../../global/route.types";
import { theme } from "../../global/styles";
import { api } from "../../services/api";
import { styles } from "./styles";
import { Button } from "../../components/Button";

export function NewContact({ navigation, route }: NewContactNavigationProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const valid = useMemo(
    () => name.length > 0 && phone.length >= 11,
    [name, phone]
  );

  const isEditing = route.params.contact != null;

  useEffect(() => {
    if (isEditing) {
      const { name, description } = route.params.contact;
      setPhone(description);
      setName(name);
    }
  }, [isEditing]);

  const handleConfirm = async () => {
    try {
      let response;
      if (isEditing) {
        response = await api.put(
          `/aged/${route.params.agedId}/contact/${route.params.contact.id}`,
          {
            type: 2,
            description: phone,
            name,
          }
        );
      } else {
        response = await api.post(`/aged/${route.params.agedId}/contact`, {
          type: 2,
          description: phone,
          name,
        });
      }
      if (response.status === 200) {
        navigation.goBack();
      }
    } catch {
      Alert.alert(
        "Ops",
        `Houve um problema para ${
          isEditing ? "atualizar" : "cadastrar"
        } o contato.`
      );
    }
  };

  const handleDelete = async () => {
    Alert.alert("Confirmação", "Tem certeza que deseja excluir este contato?", [
      { text: "Não" },
      {
        text: "Sim",
        onPress: async () => {
          try {
            const response = await api.delete(
              `/aged/${route.params.agedId}/contact/${route.params.contact?.id}`
            );
            if (response.status === 200) {
              navigation.goBack();
            }
          } catch {
            Alert.alert("Ops", "Houve um erro ao excluir o contato");
          }
        },
      },
    ]);
  };

  const Delete = () => {
    return (
      <Button onPress={handleDelete}>
        <AntDesign name="delete" size={20} color={theme.colors.secondary} />
      </Button>
    );
  };

  return (
    <>
      <Header
        title={isEditing ? "Contato" : "Novo contato"}
        headerRight={isEditing ? <Delete /> : null}
      />
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
          value={phone}
          onChangeText={(phone) => {
            setPhone(phone);
          }}
          maxLength={13}
          // mask={"([00]) [999999999]"}
          style={{ backgroundColor: theme.colors.white, borderWidth: 0 }}
        />
      </ScrollView>
      <View style={styles.footer}>
        <Button
          style={[
            styles.button,
            valid ? styles.activeButton : styles.disabledButton,
          ]}
          disabled={!valid}
          onPress={async () => await handleConfirm()}
        >
          <Text style={styles.next}>
            {isEditing ? "Atualizar" : "Cadastrar"}
          </Text>
        </Button>
      </View>
    </>
  );
}
