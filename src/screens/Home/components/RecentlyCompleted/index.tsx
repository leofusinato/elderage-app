import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { ListItem } from "./components/ListItem";

import { styles } from "./styles";

export function RecentlyCompleted() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Concluídas recentemente</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <ListItem />
      <ListItem />
      <ListItem />
    </View>
  );
}
