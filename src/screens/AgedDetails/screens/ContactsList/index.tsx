import { Alert, ScrollView, View } from "react-native";
import { ContactsListNavigationProps } from "../../../../global/route.types";
import { ItemRow } from "../components/ItemRow";
import { Header } from "../components/Header";

import { styles } from "./styles";
import { AddButton } from "../../components/AddButton";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
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
      <ScrollView>
        <Header name={name} gender={gender} />
        <View style={styles.list}>
          {contacts.map((item) => (
            <ItemRow key={item.id} description={item.name} onPress={() => {}} />
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
