import { useCallback, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ContactsListNavigationProps } from "../../../../global/route.types";
import { ItemRow } from "../components/ItemRow";
import { Header } from "../components/Header";
import { AddButton } from "../../components/AddButton";

import { styles } from "./styles";
import { api } from "../../../../services/api";

export function ContactsList({
  navigation,
  route,
}: ContactsListNavigationProps) {
  const {
    list,
    aged: { id, name, gender },
  } = route.params;

  const [contacts, setContacts] = useState(list);

  const loadContacts = async () => {
    try {
      const response = await api.get(`/aged/${id}/contact`);
      if (response.status === 200) {
        setContacts(response.data);
      }
    } catch {
      Alert.alert("Ops", "Erro ao buscar os contatos");
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadContacts();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header name={name} gender={gender} />
      <ScrollView>
        <View style={styles.list}>
          {contacts.map((item) => (
            <ItemRow
              key={item.id}
              description={item.name}
              onPress={() =>
                navigation.navigate("NewContact", {
                  agedId: route.params.aged.id,
                  contact: item,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
      <AddButton
        description="Novo contato"
        onPress={() =>
          navigation.navigate("NewContact", {
            agedId: id,
          })
        }
      />
    </View>
  );
}
