import { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { Header } from "./components/Header";
import { ItemRow } from "./components/ItemRow";
import { styles } from "./styles";

import MedicineIcon from "../../assets/images/icon-medicine.png";
import ContactsIcon from "../../assets/images/icon-contacts.png";
import ProfileIcon from "../../assets/images/icon-profile.png";
import { api } from "../../services/api";
import { AgedDetailsNavigationProps } from "../../global/route.types";
import { AgedProps } from "../../global/models/aged";

export function AgedDetails({ navigation, route }: AgedDetailsNavigationProps) {
  const [data, setData] = useState<AgedProps>({} as AgedProps);

  const getAgedDetails = async () => {
    try {
      const agedId = route.params.id;
      const response = await api.get<AgedProps>(`/aged/${agedId}`);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch {
      Alert.alert("", "Erro ao buscar os dados do idoso. Tente novamente");
    }
  };

  useEffect(() => {
    (async () => {
      await getAgedDetails();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header data={data} />
      <View style={styles.main}>
        <ItemRow
          image={MedicineIcon}
          description="Medicamentos"
          onPress={() =>
            navigation.navigate("MedicationsList", {
              list: data.medications,
              aged: { id: data.id, name: data.name, gender: data.gender },
            })
          }
        />
        <ItemRow
          image={ContactsIcon}
          description="Contatos"
          onPress={() =>
            navigation.navigate("ContactsList", {
              list: data.contacts,
              aged: { id: data.id, name: data.name, gender: data.gender },
            })
          }
        />
        <ItemRow
          image={ProfileIcon}
          description="Perfil idoso"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}
