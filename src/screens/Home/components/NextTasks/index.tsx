import React from "react";

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TaskCard } from "./components/TaskCard";

import { styles } from "./styles";

export function NextTasks() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Tarefas Próximas</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[0, 1, 2].map((value, index) => {
          return <TaskCard key={index} first={index == 0} />;
        })}
      </ScrollView>
    </View>
  );
}
