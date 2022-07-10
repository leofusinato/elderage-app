import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { CheckinMedicationProps } from "../../../../global/models/checkin";
import { ListItem } from "./components/ListItem";

import { styles } from "./styles";

type Props = {
  data: CheckinMedicationProps[];
};

export function RecentlyCompleted({ data }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Concluídas recentemente</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      {data.length > 0 ? (
        data.map((checkin) => <ListItem key={checkin.id} data={checkin} />)
      ) : (
        <Text style={styles.emptyList}>
          Você ainda não completou nenhuma tarefa hoje.
        </Text>
      )}
    </View>
  );
}
