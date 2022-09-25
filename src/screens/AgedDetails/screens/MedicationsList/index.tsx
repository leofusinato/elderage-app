import { ScrollView, View } from "react-native";
import { MedicationsListNavigationProps } from "../../../../global/route.types";
import { ItemRow } from "../components/ItemRow";
import { Header } from "../components/Header";

import { styles } from "./styles";
import { AddButton } from "../../components/AddButton";

export function MedicationsList({ route }: MedicationsListNavigationProps) {
  const {
    list,
    aged: { name, gender },
  } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header name={name} gender={gender} />
        <View style={styles.list}>
          {list.map((item) => (
            <ItemRow
              key={item.id}
              description={item.description}
              onPress={() => {}}
            />
          ))}
        </View>
      </ScrollView>
      <AddButton description="Novo remédio" />
    </View>
  );
}
