import { Alert, ScrollView, View } from "react-native";
import { MedicationsListNavigationProps } from "../../../../global/route.types";
import { ItemRow } from "../components/ItemRow";
import { Header } from "../components/Header";

import { styles } from "./styles";
import { AddButton } from "../../components/AddButton";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { api } from "../../../../services/api";

export function MedicationsList({
  navigation,
  route,
}: MedicationsListNavigationProps) {
  const {
    list,
    aged: { id, name, gender },
  } = route.params;

  const [medications, setMedications] = useState(list);

  const loadMedications = async () => {
    try {
      const response = await api.get(`/aged/${id}/medication`);
      if (response.status === 200) {
        setMedications(response.data);
      }
    } catch {
      Alert.alert("Ops", "Erro ao buscar os medicamentos. Tente novamente");
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadMedications();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header name={name} gender={gender} />
        <View style={styles.list}>
          {medications.map((item) => (
            <ItemRow
              key={item.id}
              description={item.description}
              onPress={() =>
                navigation.navigate("NewMedication", {
                  agedId: id,
                  medication: item,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
      <AddButton
        description="Novo remédio"
        onPress={() => navigation.navigate("NewMedication", { agedId: id })}
      />
    </View>
  );
}
